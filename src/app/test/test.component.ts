import { Component } from '@angular/core';
import { DataService } from '../data.service';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  dataa:any[]=[]
  constructor(private data:DataService){
    this.dataa = this.data.getData();

  }

  readMore(city: any){
    city.showPopup = true;
  }

  hideCityPopup(city: any) {
    city.showPopup = false;
  }

}
