import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  private url = environment.baseUrl;
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendChatMessage(msg: string) {
    this.socket.emit("chat", msg);
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
    this.socket.emit("mafia", msg);
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
    this.socket.emit("update", "now");
  }
  getUpdates = () => {
    return Observable.create(observer => {
      this.socket.on("update", message => {
        observer.next(message);
      });
    });
  };

  vote(msg) {
    this.socket.emit("vote", msg);
  }
  getVotes = () => {
    return Observable.create(observer => {
      this.socket.on("vote", message => {
        observer.next(message);
      });
    });
  };

  mosquitoVote(msg) {
    this.socket.emit("mosquito", msg);
  }
  getMosquitoVotes = () => {
    return Observable.create(observer => {
      this.socket.on("mosquito", message => {
        observer.next(message);
      });
    });
  };

  doctorVote(msg) {
    this.socket.emit("doctor", msg);
  }
  getDoctorVotes = () => {
    return Observable.create(observer => {
      this.socket.on("doctor", message => {
        observer.next(message);
      });
    });
  };

  kill(player = "") {
    this.socket.emit("kill", player);
  }
  getKill = () => {
    return Observable.create(observer => {
      this.socket.on("kill", message => {
        observer.next(message);
      });
    });
  };

  setTurn(turn) {
    this.socket.emit("turn", turn);
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
