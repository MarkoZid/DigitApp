import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value:string = '';
  search(value:any){
    this.value = ((<HTMLInputElement>value.target).value )
    
  }
  rating = new FormControl(0);
  ratingcount = 0;
  totalrating = 0;
  finalRating: any;

  getRating() {
    this.ratingcount++;
    this.totalrating += this.rating.value || 0;
    this.finalRating = (this.totalrating / this.ratingcount).toFixed(2);
  }



}
