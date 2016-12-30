import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../Artist'
import { Album } from '../../Album'
import {SpotifyService} from "../services/spotify.services";

@Component({
  selector: 'my-artist',
  template: `
  <div class="row" *ngIf="artist">

    <header class="artist-header">
      <div *ngIf="artist.images.length > 0">
              <img class="artist-thumb img-circle" src="{{artist.images[0].url}}" alt="">   
      </div>
        <h1>{{artist.name}}</h1>
        <p *ngIf="artist.genres.length > 0">
          Genres : <span class="meta" *ngFor="let genre of artist.genres">
                      {{genre}} 
                   </span>
        </p>
    </header>

  </div>
  <div class="artist-albums">
    <div class="row" *ngIf="albums">
      <div class="col-md-4" *ngFor="let album of albums">
         <span *ngIf="album.images.length > 0"> 
           <div class="album well">
            <img class="album-thumb img-thumbnail img-responsive"src="{{album.images[0].url}}">
            <h4>{{album.name}}</h4>
            <a  class="btn btn-default btn-block view-details" routerLink="/album/{{album.id}}">Album Details</a>
           </div><!-- album well-->
        </span>

      </div> <!-- For -->
     </div><!-- artist albums -->
   </div>
    

  `
})
export class ArtistComponent implements OnInit {
  public id:string;
  public artist: Artist[];
  public albums: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {}

ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe(
        id => {
          this._spotifyService.getArtist(id)
            .subscribe(
              artist => {
                this.artist = artist;
                console.log(this.artist)
            })
          this._spotifyService.getAlbums(id)
            .subscribe(
              albums => {
                this.albums = albums.items;
                console.log(this.albums);
              }
            )
        })
  };

}
