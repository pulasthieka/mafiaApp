import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  uri = environment.baseUrl + "mafia";
  id: string;
  players = new Subject();
  playersObservable = this.players.subscribe();
  constructor(private http: HttpClient, private socket: WebsocketService) {}

  newgame() {
    return this.http.post(`${this.uri}/newGame`, {});
  }
  newPlayer(player, id = this.id) {
    return this.http.post(`${this.uri}/add/${id}`, player);
  }
  getGame(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  getPlayers(id) {
    this.http.get(`${this.uri}/get/${id}`).subscribe(res => {
      this.players.next(res["players"]);
      // console.log("Get Players", res);
    });
  }
  getRole(id = this.id, name) {
    let params = new HttpParams().set("id", id).set("name", name);
    return this.http.get(`${this.uri}/getRole/`, { params });
  }

  start(id = this.id, settings) {
    //assigned roles
    console.log("API service recieved" + id);
    this.http.post(`${this.uri}/start/${id}`, { settings }).subscribe(res => {
      this.socket.updateRoom();
      this.players.next(res);
      console.log("Roles assigned", res);
    });
  }

  killplayer(id = this.id, player) {
    this.http.post(`${this.uri}/kill/${id}&${player}`, {}).subscribe(res => {
      // this.getPlayers(id);
      this.socket.kill(player);
      console.log("Roles assigned", res);
    });
  }
}
