import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { WebsocketService } from "../websocket.service";

@Component({
  selector: "app-narrator",
  templateUrl: "./narrator.component.html",
  styleUrls: ["./narrator.component.css"]
})
export class NarratorComponent implements OnInit {
  constructor(private api: ApiService, private socket: WebsocketService) {}
  id: string;
  players = [];
  roles = [];
  ngOnInit() {
    this.id = window.sessionStorage.getItem("gameId");
    this.api.getPlayers(this.id);
    this.api.players.subscribe((list: any[]) => {
      this.roles = list;
      console.log(this.roles);
      let alive = [];
      list.forEach(element => {
        if (!element.dead) {
          alive.push(element);
        }
      });
      this.players = alive;
    });
  }

  kill(name) {
    this.api.killplayer(this.id, name);
  }

  setNightTurn() {
    this.socket.setTurn("Night");
  }
  setDayTurn() {
    this.socket.setTurn("Day");
  }
}
