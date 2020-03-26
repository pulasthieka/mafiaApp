import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private url = 'http://localhost:9000';
  private socket;

  constructor() { 
    this.socket = io(this.url);
  }

  sendChatMessage(msg: string){
    this.socket.emit("chat", msg);
    console.log("service message :" + msg)
  }

  sendMafiaMessage(msg: string){
    this.socket.emit("mafia", msg);
  }

  getServerMessages = () => {
    return Observable.create((observer) => {
        this.socket.on("server", (message) => {
            observer.next(message);
        });
    });
  }

  getChatMessages = () => {
    return Observable.create((observer) => {
        this.socket.on("chat", (message) => {
            observer.next(message);
        });
    });
  }

  getMafiaMessages = () => {
    return Observable.create((observer) => {
        this.socket.on("mafia", (message) => {
            observer.next(message);
        });
    });
  }

  updateRoom(){
    this.socket.emit("update","now")
  }
  getUpdates = () => {
    return Observable.create((observer) => {
        this.socket.on("update", (message) => {
            observer.next(message);
        });
    });
  }

  vote(msg){
    this.socket.emit("vote",msg)
  }
  getVotes = () => {
    return Observable.create((observer) => {
        this.socket.on("vote", (message) => {
            observer.next(message);
        });
    });
  }

  destroy(){
    this.socket.close();
  }
}