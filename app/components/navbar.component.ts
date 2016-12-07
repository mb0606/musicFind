import { Component } from '@angular/core';


@Component({
  selector: 'my-navbar',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><img src="./app/assets/Logomakr_3pnS4h.png" alt="music find"></a>
        </div>
        <ul class="nav navbar-nav">
          <li routerLinkActive="active" [routerLink]="['/']" style="cursor: pointer"><a>Home</a></li>
          <li routerLinkActive="active" [routerLink]="['/about']" style="cursor: pointer"><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </nav>
   `
})

export class NavbarComponent {



}
