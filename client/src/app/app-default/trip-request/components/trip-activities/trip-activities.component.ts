import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trip-activities',
  templateUrl: './trip-activities.component.html',
  styleUrls: ['./trip-activities.component.scss']
})
export class TripActivitiesComponent implements OnInit {
  @Input() selectedActivities: string[];
  @Input() activityOptions: string[];
  @Output() pickedActivityType = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPickActivity(activity) {
    console.log('activity', activity);
  }
}
