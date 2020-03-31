import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";
import { environment } from "../environments/environment";
import { ApiService } from "./api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  private url = environment.baseUrl;
  private socket;
  room = "";
  // room = "5698808d0dd1ba8a9b60";
  constructor(private route: ActivatedRoute) {
    this.socket = io(this.url);
  }
  joinRoom(room: string) {
    this.room = room;
    this.socket.emit("join", this.room);
    console.log(this.room, "room");
  }
  sendChatMessage(msg: string) {
    var data = {
      msg: msg,
      room: this.room
    };
    this.socket.emit("chat", data);
    console.log("service message :" + msg);
  }
  getChatMessages = () => {
    return Observable.create(observer => {
      this.socket.on("chat", message => {
        observer.next(message);
      });
    });
  };

  sendMafiaMessage(msg: string) {
    var data = {
      msg: msg,
      room: this.room
    };
    this.socket.emit("mafia", data);
  }
  getMafiaMessages = () => {
    return Observable.create(observer => {
      this.socket.on("mafia", message => {
        observer.next(message);
      });
    });
  };

  getServerMessages = () => {
    return Observable.create(observer => {
      this.socket.on("server", message => {
        observer.next(message);
      });
    });
  };

  updateRoom() {
    var data = {
      msg: "now",
      room: this.room
    };
    this.socket.emit("update", data);
  }
  getUpdates = () => {
    return Observable.create(observer => {
      this.socket.on("update", message => {
        observer.next(message);
      });
    });
  };

  vote(msg) {
    var data = {
      msg: msg,
      room: this.room
    };
    this.socket.emit("vote", data);
  }
  getVotes = () => {
    return Observable.create(observer => {
      this.socket.on("vote", message => {
        observer.next(message);
      });
    });
  };

  mosquitoVote(msg) {
    var data = {
      msg: msg,
      room: this.room
    };
    this.socket.emit("mosquito", data);
  }
  getMosquitoVotes = () => {
    return Observable.create(observer => {
      this.socket.on("mosquito", message => {
        observer.next(message);
      });
    });
  };

  doctorVote(msg) {
    var data = {
      msg: msg,
      room: this.room
    };
    this.socket.emit("doctor", data);
  }
  getDoctorVotes = () => {
    return Observable.create(observer => {
      this.socket.on("doctor", message => {
        observer.next(message);
      });
    });
  };

  kill(player = "") {
    var data = {
      player: player,
      room: this.room
    };
    this.socket.emit("kill", data);
  }
  getKill = () => {
    return Observable.create(observer => {
      this.socket.on("kill", message => {
        observer.next(message);
      });
    });
  };

  setTurn(turn) {
    var data = {
      turn: turn,
      room: this.room
    };
    this.socket.emit("turn", data);
  }
  getTurn = () => {
    return Observable.create(observer => {
      this.socket.on("turn", message => {
        observer.next(message);
      });
    });
  };

  destroy() {
    this.socket.close();
  }
}
