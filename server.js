const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const app = express();
const path = require("path");
const mafiaRoutes = require("./routes/mafiaGame.route");
app.use(cors({ origin: "http://localhost:4200" }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/mafia", mafiaRoutes);
app.use(express.static(__dirname + "/mafia-app/dist/mafia-app"));
// mongoose.connect('mongodb://localhost/ng7crud?replicaSet=rs');
config = {
  DB:
    "mongodb+srv://mafiaUser:1Re^C!k0744O4Beqb9^D@cluster0-zjxga.mongodb.net/test?retryWrites=true&w=majority"
};
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));

// require the socket.io module
const io = require("socket.io");

var server = require("http").createServer(app);
const socket = io(server);
//create an event listener

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/mafia-app/dist/mafia-app/index.html"));
  // res.sendFile(path.join(__dirname+'/forestpin-website/home.html'));
});

//To listen to messages
socket.on("connection", client => {
  console.log("user  connected");
  client.on("chat", msg => {
    // console.log(msg)
    socket.emit("chat", msg);
  });
  client.on("mafia", msg => {
    // console.log(msg)
    socket.emit("mafia", msg);
  });
  client.on("vote", msg => {
    // console.log(msg)
    socket.emit("vote", msg);
  });
  client.on("update", msg => {
    socket.emit("update", msg);
  });
  client.on("kill", msg => {
    socket.emit("kill", msg);
  });
  client.on("disconnect", () => {
    console.log("Disconnected");
  });
});

//
server.listen(process.env.PORT || 8080, () => {
  console.log("Node server running on port 8080");
});
