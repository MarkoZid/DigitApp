import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.scss'],
})
export class TripPlannerComponent {
  public economy_flight_data = [
    {
      from: '7:40pm',
      to: '12:10am',
      length: '4h 30m',
      price: 17_814,
    },
  ];

  public business_class_flight_data = [
    {
      from: '7:40pm',
      to: '12:10am',
      length: '4h 30m',
      price: 42_676,
    },
  ];

  public first_class_flight_data = [
    {
      from: '7:40pm',
      to: '12:10am',
      length: '4h 30m',
      price: 74_676,
    },
  ];

  public economy_hotel_data = [
    {
      name: 'Skopje Marriott Hotel',
      price: 7_838,
      img: '',
    },
    {
      name: 'Park Hotel & Spa',
      price: 6_951,
      img: '',
    },
    {
      name: 'Doubletree by Hilton Skopje',
      price: 5_802,
      img: '',
    },
    {
      name: 'Panoramika Design & Spa',
      price: 4_339,
      img: '',
    },
  ];
  public coustructor() {}
}
