import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
  FormGroup
} from "@angular/forms";
import { WebsocketService } from "../websocket.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"]
})
export class StartComponent implements OnInit {
  showPlayerList = false;
  id: string;
  nameChosen = false;
  playerId: string;
  playerName = new FormControl();
  players = [];

  settingsForm: FormGroup;
  settings: any[];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private socket: WebsocketService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("id"));
    // window.sessionStorage.clear();
    if (this.route.snapshot.paramMap.get("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      window.sessionStorage.setItem("gameId", this.id);
      this.api.getGame(this.id).subscribe(res => {
        if (res["started"]) {
          alert("game has started");
          // add timer
          this.router.navigate(["new/"]);
        }
        this.settings = res["settings"];
        console.log(this.settings);
      });

      this.showPlayerList = true;
      if (window.sessionStorage.getItem("playerName")) {
        this.playerId = window.sessionStorage.getItem("playerName");
        this.nameChosen = true;
      }
    } else {
      this.router.navigate(["new/"]);
    }
    this.api.players.subscribe((list: any[]) => {
      this.players = list;
    });
    this.api.getPlayers(this.id);

    // monitor player while joining uses the same method as removal during killing
    this.socket.getKill().subscribe(res => {
      this.api.getPlayers(this.id);
    });
    this.settingsForm = this.formBuilder.group({
      jester: [null, Validators.required],
      doctor: [null, Validators.required],
      mafia: [null, Validators.required]
    });
  }

  createPlayer(name) {
    let player = {
      name: name,
      role: "none",
      dead: false
    };
    this.api.newPlayer(player, this.id).subscribe(res => {
      this.playerId = res["name"];
      window.sessionStorage.setItem("playerName", res["name"]);
      this.nameChosen = true;
      this.socket.kill();
      console.log("New Player Created", res);
    });

    // this.playerId = window.sessionStorage.getItem('playerName');
  }

  startGame() {
    this.api.start(this.id, this.settings);
    console.log("Start pressed");
    this.socket.getUpdates().subscribe(() => {
      this.router.navigate([`game/${this.id}`]);
    });
  }
}
