import { Component } from '@angular/core';

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
  `
})

export class SearchComponent {
  public searchTerm:string;



  searchMusic(){
    console.log(this.searchTerm);
  }
}
