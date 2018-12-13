

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



Binding syntax

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



**Attributes initialize DOM properties and then they are done.
Property values can change; attribute values can't.**



A world without attributes

> In the world of Angular, the only role of attributes is to initialize element and directive state.
> When you write a data binding, you're dealing exclusively with properties and events of the target object.
> HTML attributes effectively disappear.



Binding targets

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



NgClass

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



NgStyle

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



NgModel

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







