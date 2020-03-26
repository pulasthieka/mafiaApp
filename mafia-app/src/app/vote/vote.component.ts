import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votes = {};
  votesArray =[];
  players = [];
  player :string;
  constructor(private socket: WebsocketService, private api:ApiService) { }

  ngOnInit() {
    let id = window.sessionStorage.getItem('gameId');
    this.player= window.sessionStorage.getItem('playerName')
    this.api.getPlayers(id);
    this.api.players.subscribe((list:any[]) =>{
      let alive =[];
      list.forEach(element => {
        if (!element.dead){
          alive.push(element)
        }
      });
      this.players = alive;
    });
    this.socket.getVotes().subscribe((msg)=>{
      let vote = JSON.parse(msg);
      this.votes[vote.user] = [vote.kill]
      this.votesArray = Object.keys(this.votes).map((key) => [key, this.votes[key]]);
    })
  }

  vote(name){
    let msg = JSON.stringify({ 'user':this.player, 'kill':name})
    this.socket.vote(msg);
  }
}
