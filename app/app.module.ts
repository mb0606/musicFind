import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { routing } from './app.routing'
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// Services
import { SpotifyService } from "./services/spotify.services";

// Declarations
import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about.component";
import { SearchComponent } from "./components/search.component";
import { NavbarComponent } from "./components/navbar.component";
import { ArtistComponent } from "./components/artist.component";
import {AlbumComponent} from "./components/album.component";

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule,
                  FormsModule,
                  HttpModule,
                  routing
                ],
  declarations: [ AppComponent,
                  AboutComponent,
                  SearchComponent,
                  NavbarComponent,
                  ArtistComponent,
                  AlbumComponent
                ],
  providers: [SpotifyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
