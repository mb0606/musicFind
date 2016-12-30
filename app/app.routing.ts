import { RouterModule, Routes } from '@angular/router'
import {SearchComponent} from "./components/search.component";
import {AboutComponent} from "./components/about.component";
import {ArtistComponent} from "./components/artist.component";
import {AlbumComponent} from "./components/album.component";
import {TrackComponent} from "./components/track.component";


const APP_ROUTES: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tracks/:id', component: TrackComponent},
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
