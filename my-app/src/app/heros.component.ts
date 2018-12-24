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
    <div>{{ hero.name | uppercase }}</div>
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
    <input [(ngModel)]="hero.name" placeholder="name" />
  `
})
export class TwowayComponent {
  hero: Hero = {
    id: 1,
    name: "Kanna"
  };
}

/*****************************/
@Component({
  selector: "app-list-heros",
  template: `
    <ul>
      <li *ngFor="let hero of heroes">{{ hero.name }}</li>
    </ul>
  `
})
export class ListHerosComponent {
  heroes: Hero[] = [{ id: 1, name: "Blaster" }, { id: 2, name: "Blade" }];
}

/*****************************/
@Component({
  selector: "app-click",
  template: `
    <button (click)="onClick()">Click me!</button>
  `
})
export class ClickComponent {
  onClick(): void {
    console.log("Click!!");
  }
}

/*****************************/
@Component({
  selector: "app-ifng",
  template: `
    ngIf
    <div *ngIf="hero">{{ hero.name }}</div>
  `
})
export class IfngComponent {}

/*****************************/
@Component({
  selector: "app-style",
  template: `
    <div [class.selected]="hero === selectedHero">Cannon</div>
  `,
  styles: ['.selected { color: red; }']
})
export class StyleComponent {
  hero = 'Cannon';
  selectedHero = 'Cannon';
}

export const heroSwitchComponents = [
  SecondComponent,
  HerosComponent,
  UpperComponent,
  TwowayComponent,
  ListHerosComponent,
  ClickComponent,
  IfngComponent,
  StyleComponent
];
