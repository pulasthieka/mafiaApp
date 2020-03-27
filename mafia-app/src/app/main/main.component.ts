import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  role: string;
  status: boolean;
  name: string;
  id: string;
  mafia = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.id = window.sessionStorage.getItem("gameId");
    this.name = window.sessionStorage.getItem("playerName");
    this.api.getRole(this.id, this.name).subscribe(res => {
      this.role = res[0]["players"][0]["role"];
      console.log(res, this.role);
      if (this.role == "mafia") {
        this.mafia = true;
      }
      // add other roles
    });
  }
}
