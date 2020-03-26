import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
  }

  newgame(){
    this.api.newgame().subscribe(res => {
      window.sessionStorage.setItem('gameId', res['id']);
      let id = res['id'] 
      this.api.id = id ;
      console.log('New Game Created',id);
      this.router.navigate([`start/${id}`])
    });;
    
  }

}
