import { Component, OnInit, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { ApiService } from "../api.service";
import { MatSelectionList, MatListOption } from "@angular/material/list";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-mosquito",
  templateUrl: "./mosquito.component.html",
  styleUrls: ["./mosquito.component.scss"]
})
export class MosquitoComponent implements OnInit {
  votes = {};
  votesArray = [];
  players = [];
  player: string;
  pname = "";
  id: string;

  constructor(private socket: WebsocketService, private api: ApiService) {}

  ngOnInit(): void {
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
    this.socket.getTurn().subscribe(res => {
      if (res == "Day") {
        this.pname = "";
      }
    });
  }

  vote(name): void {
    let msg = JSON.stringify({ user: this.player, kill: name });
    this.pname = name;
    this.socket.mosquitoVote(msg);
  }
}
