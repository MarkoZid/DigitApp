import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  public isVisible = false;

  public togglePopup() {
    this.isVisible = !this.isVisible;
  }

}
