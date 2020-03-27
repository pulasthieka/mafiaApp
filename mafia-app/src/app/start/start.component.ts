import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  showPlayerList = false;
  id :string;
  nameChosen = false;
  playerId :string;
  playerName = new FormControl();
  players =[];
  constructor(
    private api:ApiService, 
    private route: ActivatedRoute, 
    private socket:WebsocketService,
    private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
    // window.sessionStorage.clear();
    if (this.route.snapshot.paramMap.get('id')){
      this.id = this.route.snapshot.paramMap.get('id');
      window.sessionStorage.setItem('gameId',this.id)
      // if (!window.sessionStorage.getItem('gameId')){
      //   window.sessionStorage.setItem('gameId',this.id)
      // }
      this.showPlayerList = true;
      if (window.sessionStorage.getItem('playerName')){
        this.playerId = window.sessionStorage.getItem('playerName');
        this.nameChosen = true;
      }
    }
    else{
      this.router.navigate(['new/'])
    }
    this.api.players.subscribe(
      (list: any[]) => {
        this.players = list
      }
    )
    this.api.getPlayers(this.id);
    
  }

  createPlayer(name){
    let player  = {
      'name': name,
      'role': 'none',
      'dead' :false
    }
    console.log(player);
    this.api.newPlayer(player,this.id).subscribe(res => {
      // this.players.next(res);
      this.playerId = res['name']
      window.sessionStorage.setItem('playerName',res['name'])
      this.api.getPlayers(this.id)
      this.nameChosen = true;
      console.log('New Player Created',res)
    });

    // this.playerId = window.sessionStorage.getItem('playerName');
    
  }

  startGame(){
    this.api.start(this.id);
    console.log("Start pressed");
    this.socket.getUpdates().subscribe(
      ()=>{
        this.router.navigate([`game/${this.id}`])
      }
    )
    
  }
}
