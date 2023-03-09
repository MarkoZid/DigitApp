import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data:any[] = [
    {'lokacija':'Skopje', "img":".\\assets\\Cities\\Skopje.jpg", "showPopup": false, "desc":"sk"},
    {'lokacija':'Bitola', "img":'.\\assets\\Cities\\Ohrid.jpg', "showPopup": false, "desc":"oh"},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Bitola.jpg', "showPopup": false, "desc":"bt"},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Bitola.jpg', "showPopup": false, "desc":"bt2"}


  ]

  getData(){
    return this.data;
  }

  constructor() { }
}
