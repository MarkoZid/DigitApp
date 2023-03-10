import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data:any[] = [
    {'lokacija':'Skopje', "img":".\\assets\\Cities\\Skopje.jpg", "showPopup": false, "desc":"Скопје — главен и најголем град во Македонија, кој воедно претставува административен,политички, стопански, културен, образовен и научен центар."},
    {'lokacija':'Bitola', "img":'.\\assets\\Cities\\Bitola.jpg', "showPopup": false, "desc":"Битола — град во југозападниот дел на Македонија и седиште на истоимената Општина Битола, административен, културен, економски, индустриски, образовен и научен центар за тој дел од земјата."},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Ohrid.jpg', "showPopup": false, "desc":"Охрид — град во југозападниот дел на Македонија и административен центар на истоимената општина. Се наоѓа на североисточното крајбрежје на Охридското Езеро, кое по градот го носи и своето име."},
    {'lokacija':'Ohrid', "img":'.\\assets\\Cities\\Ohrid3.jpg', "showPopup": false, "desc":"Охрид — град во југозападниот дел на Македонија и административен центар на истоимената општина. Се наоѓа на североисточното крајбрежје на Охридското Езеро, кое по градот го носи и своето име."}


  ]

  getData(){
    return this.data;
  }

  constructor() { }
}
