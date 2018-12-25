import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './main/app.component';
import { heroSwitchComponents } from './heros.component';

import { AppRoutingModule } from './app-routing.module';

import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    heroSwitchComponents,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
