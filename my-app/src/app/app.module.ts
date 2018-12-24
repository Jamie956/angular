import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/app.component';
import { SecondComponent, HerosComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
