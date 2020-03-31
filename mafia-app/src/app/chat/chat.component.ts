import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  // @ViewChild('chatbox') formValues;
  msg = new FormControl("");
  messages = [];
  disabled = false;
  player: string;
  constructor(
    private socket: WebsocketService,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    if (window.sessionStorage) {
      //c heck for webstorage compatibility
      if (window.sessionStorage.getItem("playerName")) {
        this.player = window.sessionStorage.getItem("playerName");
        this.api.players.subscribe((players: any[]) => {
          this.disabled = players.find(el => el.name == this.player)["dead"];
        });
      } else {
        this.router.navigate(["start"]);
        // redirect to start screen
      }
    } else {
      alert("Unsupported Browser all features may not work properly");
    }
    this.socket.getChatMessages().subscribe((message: string) => {
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
      this.socket.sendChatMessage(message);
      this.msg.setValue("");
    }
  }
}
