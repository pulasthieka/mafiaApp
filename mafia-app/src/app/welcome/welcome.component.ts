import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  newgame() {
    window.sessionStorage.clear();
    this.api.newgame().subscribe(res => {
      window.sessionStorage.setItem("gameId", res["id"]);
      window.sessionStorage.setItem("narrator", "true");
      let id = res["id"];
      this.api.id = id;
      console.log("New Game Created", id);
      this.router.navigate([`start/${id}`]);
    });
  }
}
