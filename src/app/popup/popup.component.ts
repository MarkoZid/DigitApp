import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() public descripiton:string; 
  @Input() public picture:any;
  @Input() public title:string;

  @Output() hidePopup = new EventEmitter();
  cardHeight = 400;

  ngOnInit(): void {
    this.cardHeight = window.innerHeight - 100;
    document.body.style.overflow = 'hidden';
  }

  hide() {
    document.body.style.overflow = 'auto';
    this.hidePopup.emit();
  }
}
