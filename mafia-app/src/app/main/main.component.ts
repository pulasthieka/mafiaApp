import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { WebsocketService } from "../websocket.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  role: string;
  status: boolean;
  name: string;
  id: string;
  mafia = false;
  disabled = false;
  narrator = false;
  night = false;

  constructor(private api: ApiService, private socket: WebsocketService) {}

  ngOnInit() {
    if (window.sessionStorage.getItem("narrator")) {
      this.narrator = true;
    }
    this.id = window.sessionStorage.getItem("gameId");
    this.name = window.sessionStorage.getItem("playerName");
    this.socket.getKill().subscribe(res => {
      this.api.getPlayers(this.id);
    });
    this.socket.getTurn().subscribe(res => {
      if (res == "Night") {
        this.night = true;
      } else {
        this.night = false;
      }
    });
    this.api.players.subscribe((players: any[]) => {
      this.disabled = players.find(el => el.name == this.name)["dead"];
    });
    this.api.getRole(this.id, this.name).subscribe(res => {
      this.role = res[0]["players"][0]["role"];
      this.disabled = res[0]["players"][0]["dead"];
      console.log(res, this.role);
      if (this.role == "mafia") {
        this.mafia = true;
      }
      // add other roles
    });
  }
}
