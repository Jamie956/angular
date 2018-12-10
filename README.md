# angular
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

### Component
@Component is a decorator function that specifies the Angular metadata for the component.


selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles.


The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.

[(ngModel)] is Angular's two-way data binding syntax. 

Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.