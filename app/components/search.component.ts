import { Component } from '@angular/core';
import {SpotifyService} from "../services/spotify.services";
import {Artist} from "../../Artist";

@Component({
  selector: 'my-search',
  styles: [`
    .form-group {
      position: relative;
    }
    i.fa {
      color: lightgrey;
      position: absolute;
      top: 3px;
      right: 5px;
    }
  `],
  template: `
    <h1>Need Music ?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores corporis debitis deleniti dolorem eaque enim, eveniet id, illum laboriosam laborum, magni modi natus praesentium repellendus sapiente sequi sunt ut?</p>
    <form >
      <div class="form-group">
        <input type="text" 
               class="form-control"
               placeholder="Search Artists..."
               [(ngModel)]="searchTerm"
               name="searchTerm"
               (keyup)="searchMusic()"
               ><i class="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    </form> 
    
    <div *ngIf="searchRes">
      <div *ngFor="let artist of searchRes">
        <div class="row">
          <div class="col-sm-12">
            <div class="search-res well">
              <h4><a routerLink="/artist/{{artist.id}}">{{artist.name}}</a></h4>
              <div>
                <strong *ngIf="artist.genres.length !== 0">Genre: </strong>
                <span class="meta" *ngFor="let genre of artist.genres">
                  {{genre}}
               </span>
              </div>
            </div><!-- search-res well -->
          </div><!-- col sm 12 -->
        </div><!-- row -->
      </div><!-- FOR -->
    </div><!-- IF -->
  `
})

export class SearchComponent {
  public searchTerm:string;
  public searchRes:Artist[]
  constructor(private _spotifyService: SpotifyService){}


  searchMusic(){
    console.log(this.searchTerm);
    this._spotifyService.searchMusic(this.searchTerm).subscribe(
      res => {
        this.searchRes = res.artists.items;
        console.log(this.searchRes)
      }
    )
  }
}
