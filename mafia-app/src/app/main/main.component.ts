import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "../api.service";
import { WebsocketService } from "../websocket.service";
import { interval } from "rxjs/internal/observable/interval";
import { takeWhile, tap } from "rxjs/operators";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  role: string;
  status: boolean;
  name: string;
  id: string;
  mafia = false;
  mosquito = false;
  doctor = false;
  disabled = false;
  narrator = false;
  night = false;

  constructor(private api: ApiService, private socket: WebsocketService) {}
  @ViewChild("hscroll") private hscroll: ElementRef;
  ngOnInit() {
    // if (window.sessionStorage.getItem("narrator")) {
    //   this.narrator = true;
    // }
    this.id = window.sessionStorage.getItem("gameId");
    this.socket.joinRoom(this.id);
    this.name = window.sessionStorage.getItem("playerName");
    this.socket.getKill().subscribe(res => {
      this.api.getPlayers(this.id);
    });
    this.socket.getTurn().subscribe(res => {
      if (res == "Night") {
        this.night = true;
        if (!this.disabled) {
          this.scrollRight(this.hscroll.nativeElement);
        }
      } else {
        this.night = false;
        if (!this.narrator) {
          this.scrollLeft(this.hscroll.nativeElement);
        }
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
      if (this.role == "mosquito") {
        this.mosquito = true;
      }
      if (this.role == "doctor") {
        this.doctor = true;
      }
      if (this.role == "narrator") {
        this.narrator = true;
      }
      // add other roles
    });
  }

  scrollLeft(el: Element) {
    el.scrollLeft -= 500;
  }

  scrollRight(el: Element) {
    el.scrollLeft += 500;
  }
}
