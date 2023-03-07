import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent {

  @Input() search:string



  public destinacii = [
    {'name':'Skopje', 'description':'Skopje e mn prljav grad', 'img':'img1'}, 
    {'name':'Ohrid', 'description':'Skopje e mn prljav grad', 'img':'img2'},
    {'name':'Matka', 'description':'Skopje e mn prljav grad', 'img':'img3'},
    {'name':'Mavrovo', 'description':'Skopje e mn prljav grad', 'img':'img4'}
  ]

}
