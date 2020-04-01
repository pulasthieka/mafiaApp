import { Component, OnInit, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { ApiService } from "../api.service";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"]
})
export class DoctorComponent implements OnInit {
  votes = {};
  votesArray = [];
  players = [];
  player: string;
  pname = "";

  constructor(private socket: WebsocketService, private api: ApiService) {}

  ngOnInit(): void {
    let id = window.sessionStorage.getItem("gameId");
    this.socket.joinRoom(id);
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
    this.socket.getTurn().subscribe(res => {
      if (res == "Day") {
        this.pname = "";
      }
    });
  }

  vote(name): void {
    let msg = JSON.stringify({ user: this.player, kill: name });
    this.pname = name;
    this.socket.doctorVote(msg);
  }
}
