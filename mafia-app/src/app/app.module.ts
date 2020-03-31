import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WebsocketService } from "./websocket.service";
import { ApiService } from "./api.service";

import { ChatComponent } from "./chat/chat.component";
import { VoteComponent } from "./vote/vote.component";
import { StartComponent } from "./start/start.component";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NarratorComponent } from "./narrator/narrator.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { MosquitoComponent } from "./mosquito/mosquito.component";
import { MafiaComponent } from "./mafia/mafia.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    VoteComponent,
    StartComponent,
    MainComponent,
    WelcomeComponent,
    NarratorComponent,
    DoctorComponent,
    MosquitoComponent,
    MafiaComponent
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
    MatRadioModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [WebsocketService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
