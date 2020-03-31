import { Component, OnInit, ViewChild } from "@angular/core";
import { WebsocketService } from "../websocket.service";
import { ApiService } from "../api.service";
import { MatSelectionList, MatListOption } from "@angular/material/list";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.css"]
})
export class DoctorComponent implements OnInit {
  votes = {};
  votesArray = [];
  players = [];
  player: string;
  @ViewChild(MatSelectionList, { static: true })
  private selectionList: MatSelectionList;

  constructor(private socket: WebsocketService, private api: ApiService) {}

  ngOnInit(): void {
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(
      false
    );
    let id = window.sessionStorage.getItem("gameId");
    this.player = window.sessionStorage.getItem("playerName");
    this.api.getPlayers(id);
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

  vote(name): void {
    let msg = JSON.stringify({ user: this.player, kill: name });
    this.socket.doctorVote(msg);
  }
}
