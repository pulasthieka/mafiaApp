import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WebsocketService } from "./websocket.service";
import { ChatComponent } from "./chat/chat.component";
import { VoteComponent } from "./vote/vote.component";
import { StartComponent } from "./start/start.component";
import { ApiService } from "./api.service";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    VoteComponent,
    StartComponent,
    MainComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [WebsocketService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
