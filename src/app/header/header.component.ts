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
  


}
