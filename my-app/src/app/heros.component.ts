import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";

/*****************************/
@Component({
  selector: "app-second",
  template: `
    {{ title }}
  `
})
export class SecondComponent implements OnInit {
  title = "Second Component";
  constructor() {}
  ngOnInit() {}
}

/*****************************/
@Component({
  selector: "app-heros",
  template: `
    <div>{{ hero.id }}</div>
    <div>{{ hero.name }}</div>
  `
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}

/*****************************/
@Component({
  selector: "app-upper",
  template: `
    <div>{{hero.name | uppercase}}</div>
  `
})
export class UpperComponent {
  hero: Hero = {
    id: 1,
    name: "Ark"
  };
}

/*****************************/
@Component({
  selector: "app-twoway",
  template: `
    <input [(ngModel)]="hero.name" placeholder="name">
  `
})
export class TwowayComponent {
  hero: Hero = {
    id: 1,
    name: "Kanna"
  };
}


export const heroSwitchComponents = [SecondComponent, HerosComponent, UpperComponent, TwowayComponent];
