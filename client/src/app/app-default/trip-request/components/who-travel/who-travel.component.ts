import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-who-travel',
  templateUrl: './who-travel.component.html',
  styleUrls: ['./who-travel.component.scss']
})
export class WhoTravelComponent implements OnInit {
  @Input() showConfirm;

  constructor() {}

  ngOnInit() {}

  onClickConfirm() {
    console.log('confirm');
  }
}
