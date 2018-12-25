import { Component, OnInit, Input } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

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
  styles: [".selected { color: red; }"]
})
export class StyleComponent {
  hero = "Cannon";
  selectedHero = "Cannon";
}

/*****************************/
@Component({
  selector: "app-input",
  template: `
    <div>{{ hero }}</div>
  `
})
export class InputComponent {
  @Input() hero: Hero;
}

/*****************************/
@Component({
  selector: "app-service",
  template: `
    <div>{{ hero.name }}</div>
  `
})
export class ServiceComponent {
  hero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hero => (this.hero = hero));
  }
}

/*****************************/
@Component({
  selector: "app-route-a",
  template: `
    <div>Route A</div>
  `
})
export class RouteAComponent {}

/*****************************/
@Component({
  selector: "app-route-b",
  template: `
    <div>Route B</div>
  `
})
export class RouteBComponent {}

/*****************************/
@Component({
  selector: "app-nav",
  template: `
    <ul>
      <li><a routerLink="/routea">Route A</a></li>
      <li><a routerLink="/routeb">Route B</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class NavComponent {}

/*****************************/
@Component({
  selector: "app-tmp",
  template: `
    <h3><img src="{{ heroImageUrl }}" style="height:40px" /></h3>
    <p>Sum: {{ 1 + 1 + getVal() }}</p>
    <div [hidden]="isHidden">Hidden</div>
    <div (keyup)="(0)"><input #heroInput /> {{ heroInput.value }}</div>
    <h3><img [src]="heroImageUrl" style="height:40px" /></h3>

  `
})
export class TmpComponent {
  heroImageUrl =
    "http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png";
  isHidden = false;

  getVal(): number {
    return 2;
  }
}

export const heroSwitchComponents = [
  SecondComponent,
  HerosComponent,
  UpperComponent,
  TwowayComponent,
  ListHerosComponent,
  ClickComponent,
  IfngComponent,
  StyleComponent,
  InputComponent,
  ServiceComponent,
  RouteAComponent,
  RouteBComponent,
  NavComponent,
  TmpComponent
];
