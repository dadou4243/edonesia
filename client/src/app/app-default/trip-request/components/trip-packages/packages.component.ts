import { Component, OnInit } from '@angular/core';
import * as fromData from '../../data/';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  tripPackagesData = fromData.tripPackagesData;
  constructor() {}

  ngOnInit() {
    console.log('fromData:', fromData);
    console.log('tripPackagesData', this.tripPackagesData);
  }
}
