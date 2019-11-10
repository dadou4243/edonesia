import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-trip',
  templateUrl: './food-trip.component.html',
  styleUrls: ['./food-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodTripComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
