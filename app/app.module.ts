import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { routing } from './app.routing'
import {FormsModule} from "@angular/forms";

// Declarations
import { AppComponent }  from './app.component';
import {AboutComponent} from "./components/about.component";
import {SearchComponent} from "./components/search.component";
import {NavbarComponent} from "./components/navbar.component";

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule,
                  FormsModule
                  routing
                ],
  declarations: [ AppComponent,
                  AboutComponent,
                  SearchComponent,
                  NavbarComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
