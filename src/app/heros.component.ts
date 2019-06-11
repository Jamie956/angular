import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

import { Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

import { FormControl } from "@angular/forms";


@Component({
  selector: "app-heros",
  template: `
    Hero:
    <div>{{ hero.name }}</div>
    Upper Name:
    <div>{{ hero.name | uppercase }}</div>
    Two Way Binding:
    <input [(ngModel)]="hero.name" placeholder="name" />
  `
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}

//////////////////////////////
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

//////////////////////////////
@Component({
  selector: "app-click",
  template: `
    <button (click)="onClick()">Click</button>
  `
})
export class ClickComponent {
  onClick(): void {
    // console.log("Click!!");
    alert('???');
  }
}

//////////////////////////////
@Component({
  selector: "app-ifng",
  template: `
    ngIf
    <div *ngIf="hero">{{ hero.name }}</div>
  `
})
export class IfngComponent {}

//////////////////////////////
@Component({
  selector: "app-style",
  template: `
    <div [class.selected]="hero === selectedHero">Cannon</div>
  `,
  styles: [".selected { color: red; }"]
})
export class StyleComponent {
  hero = "x";
  selectedHero = "x";
}

//////////////////////////////
@Component({
  selector: "app-input",
  template: `
    <div>{{ hero }}</div>
  `
})
export class InputComponent {
  @Input() hero: Hero;
}

//////////////////////////////
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
    // this.Heroes();
    this.heroService.get().subscribe(hero => (this.hero = hero));
  }

  // Heroes(): void {
  //   this.heroService.get().subscribe(hero => (this.hero = hero));
  // }
}

//////////////////////////////
@Component({
  selector: "app-route-a",
  template: `
    <div>Route A</div>
  `
})
export class RouteAComponent {}

//////////////////////////////
@Component({
  selector: "app-route-b",
  template: `
    <div>Route B</div>
  `
})
export class RouteBComponent {}

//////////////////////////////
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

//////////////////////////////
@Component({
  selector: "app-tmp",
  template: `
    <h3><img src="{{ heroImageUrl }}" style="height:40px" /></h3>
    <h3><img [src]="heroImageUrl" style="height:40px" /></h3>


    <p>Sum: {{ 1 + 1 + getVal() }}</p>
    <div [hidden]="isHidden">Hidden</div>
    <div (keyup)="(0)"><input #heroInput /> {{ heroInput.value }}</div>

    <app-del
      (deleteRequest)="deleteHero($event)"
      [hero]="currentHero"
    ></app-del>

    <div (myClick)="clicked = $event" clickable>click me {{ clicked }}</div>
    <input [(ngModel)]="name" />{{ name }}
    <div [style.color]="isSpecial ? 'red' : 'green'">fg</div>
    <button (click)="onSave($event)">Save</button>

    <div [ngStyle]="currentStyles">sf</div>
  `
})
export class TmpComponent {
  heroImageUrl =
    "http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png";
  isHidden = false;
  name: string = "MaXiu";
  isSpecial = true;
  currentHero: Hero = { id: 1, name: "March" };

  currentStyles = {
    "color": "red"
  };

  getVal(): number {
    return 2;
  }

  deleteHero(hero: Hero) {
    alert(`Delete ${hero ? hero.name : "the hero"}.`);
  }

  onSave(event: KeyboardEvent) {
    alert(event);
  }
}

@Component({
  selector: "app-del",
  template: `
    <button (click)="delete()">Delete</button>
  `
})
export class DelComponent {
  @Output() deleteRequest = new EventEmitter<Hero>();
  @Input() hero: Hero;

  delete() {
    this.deleteRequest.emit(this.hero);
  }
}

//////////////////////////////
@Component({
  selector: "app-keyup",
  template: `
    <input (keyup)="onKey($event)" />
    <p>{{ values }}</p>
  `
})
export class KeyupComponent {
  values = "";
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + " | ";
  }
}

//////////////////////////////
@Component({
  selector: "app-keyup2",
  template: `
    <input #box (keyup)="onKey(box.value)" />
    <p>{{ values }}</p>
  `
})
export class Keyup2Component {
  values = "";
  onKey(value: string) {
    this.values += value + " | ";
  }
}

//////////////////////////////
@Component({
  selector: "app-keyup3",
  template: `
    <input #box (keyup.enter)="onEnter(box.value)" />
    <p>{{ value }}</p>
  `
})
export class Keyup3Component {
  value = "";
  onEnter(value: string) {
    this.value = value;
  }
}

//////////////////////////////
@Component({
  selector: "app-hero-child",
  template: `
    <p>{{ myhero.name }}</p>
  `
})
export class HeroChildComponent {
  @Input("hero") myhero: Hero;
}

@Component({
  selector: "app-hero-parent",
  template: `
    <app-hero-child *ngFor="let hero of heroes" [hero]="hero"></app-hero-child>
  `
})
export class HeroParentComponent {
  heroes: Hero[] = [
    { id: 1, name: "Blaster" },
    { id: 2, name: "Blade" },
    { id: 3, name: "Bow Master" }
  ];
}

//////////////////////////////
@Component({
  selector: "app-name-child",
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  private _name = "";

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || "<no name set>";
  }

  get name(): string {
    return this._name;
  }
}

@Component({
  selector: "app-name-parent",
  template: `
    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `
})
export class NameParentComponent {
  names = ["Mr. IQ", "   ", "  Bombasto  "];
}

//////////////////////////////
@Component({
  selector: "app-voter",
  template: `
    <h4>{{ name }}</h4>
    <button (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}

@Component({
  selector: "app-vote-taker",
  template: `
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)"
    >
    </app-voter>
  `
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ["Mr. IQ", "Ms. Universe", "Bombasto"];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}

//////////////////////////////
@Component({
  selector: "app-parent-counter",
  template: `
    <button (click)="counter.inc()">Inc</button>
    <button (click)="counter.des()">Des</button>
    <div>{{ counter.count }}</div>
    <app-counter #counter></app-counter>
  `
})
export class CountParentComponent {}

@Component({
  selector: "app-counter",
  template: "<p>Child Counter</p>"
})
export class CountChildComponent {
  count = 0;

  inc() {
    this.count = this.count + 1;
  }
  des() {
    this.count = this.count - 1;
  }
}

//////////////////////////////
@Component({
  selector: "app-dire",
  template: `
    <div>
      <input type="radio" name="colors" (click)="color = 'lightgreen'" />Green
      <input type="radio" name="colors" (click)="color = 'yellow'" />Yellow
      <input type="radio" name="colors" (click)="color = 'cyan'" />Cyan
    </div>
    <p [appHighlight]="color">Highlight me!</p>

    <p [appHighlight]="color" defaultColor="violet">Default Color is violet</p>
  `
})
export class DireComponent {
  color: string;
}

//////////////////////////////
@Component({
  selector: "app-pipe",
  template: `
    <div *ngFor="let hero of (heroes | longHeroes)">{{ hero.name }}</div>
  `
})
export class PipeComponent {
  heroes: Hero[] = [
    { id: 1, name: "Blaster" },
    { id: 2, name: "Blade" },
    { id: 3, name: "Bow Master" }
  ];
}

//////////////////////////////
@Component({
  selector: "app-async",
  template: `
    <p>Message: {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>
  `
})
export class AsyncComponent {
  message$: Observable<string>;

  private messages = [
    "You are my hero!",
    "You are the best hero!",
    "Will you be my hero?"
  ];

  constructor() {
    this.resend();
  }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}

//////////////////////////////
@Component({
  selector: "app-form1",
  template: `
    <label> Name: <input type="text" [formControl]="name"/></label>
    <p>Value: {{ name.value }}</p>
    <p><button (click)="updateName()">Update Name</button></p>
  `
})
export class Form1Component {
  name = new FormControl("");

  updateName() {
    this.name.setValue("Nancy");
  }
}

export const heroSwitchComponents = [
  HerosComponent,
  ListHerosComponent,
  ClickComponent,
  IfngComponent,
  StyleComponent,
  InputComponent,
  ServiceComponent,
  RouteAComponent,
  RouteBComponent,
  NavComponent,
  TmpComponent,
  DelComponent,
  KeyupComponent,
  Keyup2Component,
  Keyup3Component,
  HeroChildComponent,
  HeroParentComponent,
  NameChildComponent,
  NameParentComponent,
  VoterComponent,
  VoteTakerComponent,
  CountChildComponent,
  CountParentComponent,
  DireComponent,
  PipeComponent,
  AsyncComponent,
  Form1Component
];
