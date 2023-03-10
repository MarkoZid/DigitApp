import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/Cities/Skopje.jpg',
      title: 'Skopje',
      // subtitle: 'Скопје',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/Cities/Bitola.jpg',
      title: 'Bitola',
      // subtitle: 'Битола',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/Cities/Ohrid.jpg',
      title: 'Ohrid',
      // subtitle: 'Охрид',
    };
    this.slides[3] = {
      id: 3,
      src: './assets/Cities/Skopjeplostad.jpg',
      title: 'Skopje',
      // subtitle: 'Плоштад Скопје',
    };
    this.slides[4] = {
      id: 4,
      src: './assets/Cities/Kratovo.jpg',
      title: 'Kratovo',
      // subtitle: 'Кратово',
    };
  }
}
