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
      title: 'First slide',
      subtitle: 'Скопје',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/Cities/Bitola.jpg',
      title: 'Second slide',
      subtitle: 'Битола',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/Cities/Ohrid.jpg',
      title: 'Third slide',
      subtitle:
        'Охрид',
    };
    this.slides[3] = {
      id: 3,
      src: './assets/Cities/Ohrid3.jpg',
      title: 'Fourth slide',
      subtitle:
        'Охрид',
    };
    this.slides[4] = {
      id: 4,
      src: './assets/Cities/Skopjeplostad.jpg',
      title: 'Fifth slide',
      subtitle:
        'Плоштад Скопје',
    };
    this.slides[5] = {
      id: 5,
      src: './assets/Cities/Kratovo.jpg',
      title: 'Sixth slide',
      subtitle:
        'Кратово',
    };
  }
}
