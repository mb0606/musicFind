import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../Artist'
import { Album } from '../../Album'
import {SpotifyService} from "../services/spotify.services";

@Component({
  selector: 'my-album',
  template: `

    <div id="album" *ngIf="album">
      <header class="album-header">
        <div class="row">
          <div class="col-md-4">
             <img class="album-thumb img-thumbnail img-responsive"src="{{album.images[0].url}}">
          </div><!-- col-md-4 -->
          <div class="col-md-8"> 
             <h1>{{album.name}}</h1>
             <h4 *ngIf="album.artists.length > 0"><span *ngFor="let artist of album.artists">{{artist.name}}</span></h4>
             <h5>Release Date: {{album.release_date}}</h5>
             <h5>Label: {{album.label}}</h5>
             <a class="btn btn-primary" target="_blank" href="{{album.external_urls.spotify}}">View in Spotify</a>
          </div><!-- col md 8 -->
        </div><!-- row -->
      </header>
      
      <div class="album-tracks">
        <h2>Album Tracks</h2>
        <div *ngFor="let track of album.tracks.items">
          <div class="well">
            <h5>{{track.track_number}} - {{track.name}}</h5>
            <a routerLink="/tracks/{{track.id}}">Preview Track</a>
          </div><!-- well -->
        </div><!-- For -->
      </div><!-- album-tracks -->
 
    </div><!-- #album --> 

  `
})
export class AlbumComponent {
  id:string;
  album: Album;

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {}


  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe(
        id => {
          this._spotifyService.getAlbum(id)
            .subscribe(
              album => {
                this.album = album;
                console.log(this.album)
              })
        })
  };

}
