import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // needed if you use ngModel

import { AppRoutingModule } from './app-routing.module'; // 👈 added routing
import { AppComponent } from './app/app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // 👈 routing comes after BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
