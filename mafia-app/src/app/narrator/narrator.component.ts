import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-narrator",
  templateUrl: "./narrator.component.html",
  styleUrls: ["./narrator.component.css"]
})
export class NarratorComponent implements OnInit {
  constructor(private api: ApiService) {}
  id: string;
  players = [];
  ngOnInit() {
    this.id = window.sessionStorage.getItem("gameId");
    this.api.getPlayers(this.id);
    this.api.players.subscribe((list: any[]) => {
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
}
