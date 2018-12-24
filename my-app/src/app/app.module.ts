import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './main/app.component';
import { heroSwitchComponents } from './heros.component';

@NgModule({
  declarations: [
    AppComponent,
    heroSwitchComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
