import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'start/:id', component: StartComponent },
  { path: 'game/:id', component: MainComponent },
  { path: 'new/', component: WelcomeComponent},
  { path: '**', redirectTo:'new/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
