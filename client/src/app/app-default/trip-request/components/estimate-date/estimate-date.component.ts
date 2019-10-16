import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate-date',
  templateUrl: './estimate-date.component.html',
  styleUrls: ['./estimate-date.component.scss']
})
export class EstimateDateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClickConfirm() {
    console.log('confirm');
  }
}
