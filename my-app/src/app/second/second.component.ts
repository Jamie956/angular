import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit {
  title = "Second Component";

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
}

@Component({
  selector: "app-heros",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() {}

  ngOnInit() {}
}
