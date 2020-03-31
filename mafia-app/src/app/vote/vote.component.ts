import { Component, OnInit, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { ApiService } from "../api.service";
import { MatSelectionList, MatListOption } from "@angular/material/list";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.scss"]
})
export class VoteComponent implements OnInit {
  votes = {};
  votesArray = [];
  players = [];
  player: string;
  @ViewChild(MatSelectionList, { static: true })
  private selectionList: MatSelectionList;

  constructor(private socket: WebsocketService, private api: ApiService) {}

  ngOnInit() {
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(
      false
    );
    let id = window.sessionStorage.getItem("gameId");
    this.player = window.sessionStorage.getItem("playerName");
    this.api.getPlayers(id);
    this.api.players.subscribe((list: any[]) => {
      let alive = [];
      list.forEach(element => {
        if (!element.dead && element.role != "narrator") {
          alive.push(element);
        }
      });
      this.players = alive;
    });
    this.socket.getVotes().subscribe(msg => {
      let vote = JSON.parse(msg);
      this.votes[vote.user] = [vote.kill];
      this.votesArray = Object.keys(this.votes).map(key => [
        key,
        this.votes[key]
      ]);
    });
  }

  vote(name) {
    let msg = JSON.stringify({ user: this.player, kill: name });
    this.socket.vote(msg);
    let message = JSON.stringify({
      username: this.player,
      message: "I say, lets kill " + name
    });
    this.socket.sendChatMessage(message);
  }
}
