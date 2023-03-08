import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data:any[] = [
    {'lokacija':'Skopje', "img":".\\assets\\Cities\\Skopje.jpg"},
    {'lokacija':'Bitola', "img":'.\\assets\\Cities\\Ohrid.jpg'},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Bitola.jpg'},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Bitola.jpg'}


  ]

  getData(){
    return this.data;
  }

  constructor() { }
}
