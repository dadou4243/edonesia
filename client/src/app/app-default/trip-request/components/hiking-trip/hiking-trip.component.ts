import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hiking-trip',
  templateUrl: './hiking-trip.component.html',
  styleUrls: ['./hiking-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HikingTripComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
