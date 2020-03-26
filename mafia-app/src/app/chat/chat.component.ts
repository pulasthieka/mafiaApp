import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // @ViewChild('chatbox') formValues;
  msg = new FormControl('');
  messages = [];
  player : string;
  constructor( private socket:WebsocketService, private router:Router) { }

  ngOnInit() {
    if (window.sessionStorage){ //c heck for webstorage compatibility
      if (window.sessionStorage.getItem('playerName')){
        this.player = window.sessionStorage.getItem('playerName');
      }
      else{
        this.router.navigate(['start']);
        // redirect to start screen
      }
    }
    else{
      alert('Unsupported Browser all features may not work properly')
    }
    this.socket.getChatMessages().subscribe(
      (message: string) => {
        this.messages.push(JSON.parse(message))
    });
  }
  
  ngOnDestroy(){
    this.socket.destroy();
  }

  sendChatMessage(text){
    let message = JSON.stringify({
      'username': this.player,
      'message' : text})
    this.socket.sendChatMessage(message);
  }

  keyDowntoSend(event) {
    if(event.keyCode == 13) {
      // alert('you just clicked enter');
      this.sendChatMessage(this.msg.value)
      this.msg.setValue('');
      // this.msg.reset();
    }
  }
}
