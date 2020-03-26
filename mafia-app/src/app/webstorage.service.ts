import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class WebstorageService {
  playername: string
  constructor(@Inject(SESSION_STORAGE) private sessionStorage : StorageService) { 
    if (this.sessionStorage.get('mafiaGame')){
      this.playername = this.sessionStorage.get('playerName');
    }
  }

  delete(){
    // this.browserStorage.remove('playerName');
    this.sessionStorage.clear()
  }
}
