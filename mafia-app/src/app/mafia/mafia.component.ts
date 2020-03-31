import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-mafia",
  templateUrl: "./mafia.component.html",
  styleUrls: ["./mafia.component.scss"]
})
export class MafiaComponent implements OnInit {
  msg = new FormControl("");
  display = false;
  messages = [];
  disabled = false;
  player: string;
  constructor(
    private socket: WebsocketService,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    if (window.sessionStorage) {
      //c heck for webstorage compatibility
      if (window.sessionStorage.getItem("playerName")) {
        this.player = window.sessionStorage.getItem("playerName");
        this.api.players.subscribe((players: any[]) => {
          if (players.find(el => el.name == this.player)["role"] == "mafia") {
            this.display = true;
          }
          this.disabled = players.find(el => el.name == this.player)["dead"];
        });
      } else {
        this.router.navigate(["start"]);
        // redirect to start screen
      }
    } else {
      alert("Unsupported Browser all features may not work properly");
    }
    this.socket.getMafiaMessages().subscribe((message: string) => {
      this.messages.push(JSON.parse(message));
    });
  }

  ngOnDestroy() {
    this.socket.destroy();
  }

  sendChatMessage(text) {
    if (text) {
      let message = JSON.stringify({
        username: this.player,
        message: text
      });
      this.socket.sendMafiaMessage(message);
      this.msg.setValue("");
    }
  }
}
