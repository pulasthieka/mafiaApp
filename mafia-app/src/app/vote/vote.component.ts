import { Component, OnInit, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { ApiService } from "../api.service";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"]
})
export class VoteComponent implements OnInit {
  votes = {};
  votesArray = [];
  players = [];
  pname = "";
  id: string;
  player: string;

  constructor(private socket: WebsocketService, private api: ApiService) {}

  ngOnInit() {
    this.id = window.sessionStorage.getItem("gameId");
    this.socket.joinRoom(this.id);
    this.player = window.sessionStorage.getItem("playerName");
    this.api.getPlayers(this.id);
    this.api.players.subscribe((list: any[]) => {
      let alive = [];
      list.forEach(element => {
        if (!element.dead && element.role != "narrator") {
          alive.push(element);
        }
      });
      this.players = alive;
    });
    // this.socket.getVotes().subscribe(msg => {
    //   let vote = JSON.parse(msg);
    //   this.votes[vote.user] = [vote.kill];
    //   this.votesArray = Object.keys(this.votes).map(key => [
    //     key,
    //     this.votes[key]
    //   ]);
    // });
    this.socket.getTurn().subscribe(res => {
      if (res == "Day") {
        this.pname = "";
      }
    });
  }

  vote(name) {
    let msg = JSON.stringify({ user: this.player, kill: name });
    this.socket.vote(msg);
    this.api.voteplayer(name, this.pname, this.id);
    // console.log(name, this.pname);
    this.pname = name;
    let message = JSON.stringify({
      username: this.player,
      message: "I say, lets kill " + name
    });
    this.socket.sendChatMessage(message);
  }
  abstain() {
    this.api.voteplayer("NULL", this.pname, this.id);
    this.pname = "";
  }
}
