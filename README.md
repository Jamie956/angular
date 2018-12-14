Angular quick start

```shell
npm install -g @angular/cli
ng new my-app
ng serve --open
```

```shell
ng new angular-tour-of-heroes
ng serve --open

ng generate component heroes
```

```
ng generate component hero-detail
```

```
ng generate service hero
```

**Component**

@Component is a decorator function that specifies the Angular metadata for the component.


selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles.


The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.

[(ngModel)] is Angular's two-way data binding syntax. 

Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.



## FUNDAMENTALS

### Architecture

### Components & Templates

#### Displaying Data



The template displays the two component properties

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
```



The CSS `selector` in the `@Component` decorator specifies an element named `<app-root>`.

```html
<body>
  <app-root></app-root>
</body>
```



Declare and initialize the properties using a constructor.

```js
export class AppCtorComponent {
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}
```



Showing an array property with *ngFor

```js
//src/app/app.component.ts (class)
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}

//src/app/app.component.ts (template)
template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero }}
    </li>
  </ul>
`
```



Creating a class for the data

```js
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}
```



Using the Hero class

```js
heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
myHero = this.heroes[0];
```



Conditional display with NgIf

```html
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```



#### Template Syntax



A template **statement** responds to an **event** raised by a binding target

```html
<button (click)="deleteHero()">Delete hero</button>
```



**Binding syntax**

```js
//One-way from data source to view target
{{expression}}
[target]="expression"
bind-target="expression"

//One-way from view target to data source
(target)="statement"
on-target="statement"

//Two-way 
[(target)]="expression"
bindon-target="expression"
```



Attributes initialize DOM properties and then they are done.
Property values can change; attribute values can't.



A world without attributes

> In the world of Angular, the only role of attributes is to initialize element and directive state.
> When you write a data binding, you're dealing exclusively with properties and events of the target object.
> HTML attributes effectively disappear.



**Binding targets**

```html
<img [src]="heroImageUrl">
<app-hero-detail [hero]="currentHero"></app-hero-detail>
<div [ngClass]="{'special': isSpecial}"></div>

<button (click)="onSave()">Save</button>
<app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
<div (myClick)="clicked=$event" clickable>click me</div>

<input [(ngModel)]="name">

<button [attr.aria-label]="help">help</button>

<div [class.special]="isSpecial">Special</div>

<button [style.color]="isSpecial ? 'red' : 'green'">
```



**NgClass**

```js
currentClasses: {};
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}
```



```html
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>
```



**NgStyle**

```js
currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
```



```html
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
```



**NgModel**

```js
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

/* Other imports */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  /* Other module metadata */
})
export class AppModule { }
```



```html
<input [(ngModel)]="currentHero.name">
```



**NgIf**

Add or remove an element from the DOM

```html
<app-hero-detail *ngIf="isActive"></app-hero-detail>
```



**NgForOf**

```html
<div *ngFor="let hero of heroes">{{hero.name}}</div>
```



***ngFor with trackBy**

```js
trackByHeroes(index: number, hero: Hero): number { return hero.id; }
```



```html
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
  ({{hero.id}}) {{hero.name}}
</div>
```



**The *NgSwitch* directives**

```html
<div [ngSwitch]="currentHero.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
</div>
```



A **template reference variable** is often a reference to a DOM element within a template.
It can also be a reference to an Angular component or directive or a
[web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

```html
<input #phone placeholder="phone number">

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>
```



**ngForm**

```html
<form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">
  <div class="form-group">
    <label for="name">Name
      <input class="form-control" name="name" required [(ngModel)]="hero.name">
    </label>
  </div>
  <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
</form>
<div [hidden]="!heroForm.form.valid">
  {{submitMessage}}
</div>
```



**Declaring Input and Output properties**

```js
@Input()  hero: Hero;
@Output() deleteRequest = new EventEmitter<Hero>();
```



**Pipe**

```html
<div>Title through uppercase pipe: {{title | uppercase}}</div>
```



**Safe navigation operator (`?.`)**

```html
The current hero's name is {{currentHero?.name}}
```

 

**non-null assertion operator (!)**

```html
<!--No hero, no text -->
<div *ngIf="hero">
  The hero's name is {{hero!.name}}
</div>
```



#### User Input



Type the *$event*

```js
export class KeyUpComponent_v1 {
  values = '';
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
```



Get user input from a template reference variable

```js
@Component({
  selector: 'app-key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
```



Key event filtering (with `key.enter`)

```js
@Component({
  selector: 'app-key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}
```



On blur

```js
@Component({
  selector: 'app-key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}
```



#### Lifecycle Hooks



ngOnInit

```js
export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
```



















