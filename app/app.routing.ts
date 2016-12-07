import { RouterModule, Routes } from '@angular/router'
import {SearchComponent} from "./components/search.component";
import {AboutComponent} from "./components/about.component";


const APP_ROUTES: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
