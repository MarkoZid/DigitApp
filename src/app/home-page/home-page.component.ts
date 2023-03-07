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
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/Cities/Bitola.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/Cities/Ohrid.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
  }
}
