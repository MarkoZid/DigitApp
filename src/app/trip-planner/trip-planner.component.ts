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

  public hotel_data = [
    {
      name: 'Skopje Marriott Hotel',
      price: '7,838',
      img: 'assets/Cities/mariot.jpg',
    },
    {
      name: 'Park Hotel & Spa',
      price: '6,951',
      img: 'assets/Cities/park.jpg',
    },
    {
      name: 'Doubletree by Hilton Skopje',
      price: '5,802',
      img: 'assets/Cities/double.jpg',
    },
    {
      name: 'Panoramika Design & Spa',
      price: '4,339',
      img: 'assets/Cities/park.jpg',
    },
  ];
  campaignOne = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  public selected: string = '';
  public ecoPrice = 'MKD 48,187 to MKD 54,187';
  public midPrice = 'MKD 91,333 to MKD 13,562';
  public firstPrice = 'MKD 129,542 to MKD 167,934';
  public dateGiven = false;

  public coustructor() {}

  public goToUrl() {
    window.open(
      'https://www.booking.com/hotel/mk/skopje-marriott.html?aid=7344301&label=metatripad-link-dmetarow-hotel-1752584_xqdz-2a66eca10c2f455601da7dbf70e9743c_los-02_bw-009_tod-13_dom-com_curr-MKD_gst-01_nrm-01_clkid-ec998667-deef-404d-a2ac-36705d5dcc46_aud-0000_mbl-M_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&sid=f1efed7e088a931d4def0d1f3f954b52&all_sr_blocks=175258401_94622698_1_2_0;checkin=2023-03-19;checkout=2023-03-21;dest_id=-95841;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=175258401_94622698_1_2_0;hpos=1;matching_block_id=175258401_94622698_1_2_0;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=175258401_94622698_1_2_0__26820;srepoch=1678455262;srpvid=dac55f6edb5c0014;type=total;ucfs=1&#hotelTmpl',
      '_blank'
    );
  }
}
