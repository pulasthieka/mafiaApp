const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for a recording session
let Game = new Schema({
    name : {type:String},
    started : {type: Boolean , default:false},
    players: [{
        name: {type: String },
        role: {type: String },
        dead :{type: Boolean, default:false}
    }],
    settings:{
        jester: {type: Boolean, default:false},
        mafia: {type: Number, default:1},
        mosquito : {type: Boolean, default:false}
    },
  },{
      collection: 'games'
  });
  
  module.exports = mongoose.model('game', Game);