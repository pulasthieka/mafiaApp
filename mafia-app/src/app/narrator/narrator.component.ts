import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { WebsocketService } from "../websocket.service";

@Component({
  selector: "app-narrator",
  templateUrl: "./narrator.component.html",
  styleUrls: ["./narrator.component.scss"]
})
export class NarratorComponent implements OnInit {
  constructor(private api: ApiService, private socket: WebsocketService) {}
  id: string;
  players = [];
  roles = [];
  doctorMsg = "";
  mosquitoMsg = "";
  mosquitoStings = [];

  ngOnInit() {
    this.id = window.sessionStorage.getItem("gameId");
    this.socket.joinRoom(this.id);
    this.api.getPlayers(this.id);
    this.api.players.subscribe((list: any[]) => {
      this.roles = list;
      console.log(this.roles);
      let alive = [];
      list.forEach(element => {
        if (!element.dead && element.role != "narrator") {
          alive.push(element);
        }
      });
      this.players = alive;
    });
    this.socket.getDoctorVotes().subscribe(msg => {
      let vote = JSON.parse(msg);
      this.doctorMsg = vote.kill;
    });
    this.socket.getMosquitoVotes().subscribe(msg => {
      let vote = JSON.parse(msg);
      this.mosquitoMsg = vote.kill;
    });
  }

  kill(name) {
    this.api.killplayer(this.id, name);
  }

  setNightTurn() {
    this.socket.setTurn("Night");
  }
  setDayTurn() {
    this.mosquitoStings.push(this.mosquitoMsg);
    this.socket.setTurn("Day");
  }
}
