const express = require('express');
const gameRoutes = express.Router();
var crypto = require("crypto");



// Require Business model in our routes module
let Game = require('../models/game');
// var id = 0;

gameRoutes.route('/newGame').post(function (req, res) {
  let game = new Game(req.body);
  game.name = crypto.randomBytes(10).toString('hex');
//   game.started = false;
  game.save()
    .then(game => {
      console.log('New session added ' + game.name);
      res.status(200).json({'id': game.name});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined store route
gameRoutes.route('/add/:id').post(function (req, res) {
    let id = req.params.id
    console.log(id)
    if (id){
        Game.findOne({'name':id},function(err,game){
            if (!game.started){
                p = req.body;
                Game.updateOne({"name":id},{$push:{'players':p}}).then(player => {
                    // socket.emit player added 
                    res.json(p);
                })
            }
            else{
                
                // redirect to home page
            }
        })
    }

});


gameRoutes.route('/start/:id').post(function(req,res){
    let id = req.params.id;
    console.log("Assignment Started")
    // Game.updateOne({'name':id},{$set: { "players" : req.body }} )
    Game.findOne({'name':id},function(err,game){
        game.started = true;
        roles = [];
        if (game.settings.jester){
            roles.push('jester');
        };
        if (game.settings.doctor){
            roles.push('doctor');
        };
        var m;
        console.log(game.settings.mafia)
        for (m = 0; m < (game.settings.mafia); m++) {
            roles.push("mafia");
        }
        var i;
        let j = roles.length;
        for (i = 0; i < (game.players.length-j); i++) {
            roles.push("villager");
        }
        game.players.forEach(player => {
            // assign roles
            let x = Math.floor(Math.random() * (roles.length) );
            player.role = roles[x];
            // console.log(player.role,roles,x)
            roles.splice(x,1);
        });
        game.save()
        res.json(game.players)
    })
})

gameRoutes.route('/kill/:id&:player').post(function(req,res){
    let id = req.params.id;
    player = req.params.player;
    Game.updateOne({'name':id, 'players.name':player},{$set: { "players.$.dead" : true }} )
})



// Defined get data(index or listing) route
gameRoutes.route('/get/:id').get(function (req, res) {
    // console.log('Backend Get')
    Game.findOne({'name':req.params.id}, function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});
gameRoutes.route('/getRole').get(function (req, res) {
    // console.log('Backend Get')
    id = req.query.id;
    name1 = req.query.name
    console.log(name1,id," name")
    Game.find({ name: id }, { players: { $elemMatch: { name: name1 } } }).then(
        player => {
          res.json(player);
          console.log(player, "players");
        }
      );
});

// Defined delete | remove | destroy route
gameRoutes.route('/delete/:id').get(function (req, res) {
    Game.remove({'name': req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = gameRoutes;