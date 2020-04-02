import {
  Component,
  OnInit,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild("scrollMe") private myScrollContainer: ElementRef;
  msg = new FormControl("");
  messages = [];
  disabled = false;
  player: string;
  id: string;
  disableScrollDown = false;

  constructor(
    private socket: WebsocketService,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    if (window.sessionStorage) {
      //c heck for webstorage compatibility
      this.id = window.sessionStorage.getItem("gameId");
      this.socket.joinRoom(this.id);
      if (window.sessionStorage.getItem("playerName")) {
        this.player = window.sessionStorage.getItem("playerName");
        this.api.players.subscribe((players: any[]) => {
          this.disabled = players.find(el => el.name == this.player)["dead"];
          if (this.disabled) {
            this.msg.disable();
          }
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
    this.scrollToBottom();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.socket.destroy();
  }

  sendChatMessage(text) {
    if (text) {
      this.disableScrollDown = false;
      let message = JSON.stringify({
        username: this.player,
        message: text
      });
      this.socket.sendChatMessage(message);
      this.msg.setValue("");
    }
  }
  scrollToBottom(): void {
    if (this.disableScrollDown) {
      return;
    } else {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) {}
    }
  }

  onScroll(): void {
    let element = this.myScrollContainer.nativeElement;
    let atBottom =
      element.scrollHeight - element.scrollTop <= element.clientHeight + 10;
    console.log("Before", atBottom, this.disableScrollDown);
    if (this.disableScrollDown && atBottom) {
      this.disableScrollDown = false;
    } else {
      this.disableScrollDown = true;
    }
    console.log("After", atBottom, this.disableScrollDown);
  }
}
