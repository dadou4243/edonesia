import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeveragesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
