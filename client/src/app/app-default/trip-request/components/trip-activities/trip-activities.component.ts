import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-trip-activities',
  templateUrl: './trip-activities.component.html',
  styleUrls: ['./trip-activities.component.scss']
})
export class TripActivitiesComponent implements OnInit, OnChanges {
  @Input() selectedActivities: string[];
  @Input() activityOptions: any[];
  @Output() pickedActivityType = new EventEmitter();

  pickedActivities: string[];
  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    this.stepValidationObject = {
      destination: {
        message: 'You must select at least one choice',
        isValid: this.selectedActivities.length > 0
      }
    };
  }

  ngOnChanges() {
    // this.pickedActivities = this.selectedActivities;
  }

  onPickActivity(activitiesFromEvent) {
    console.log('activitiesFromEvent', activitiesFromEvent);

    this.stepValidationObject.destination.isValid =
      activitiesFromEvent > 0 ? true : false;

    this.pickedActivityType.emit({
      stepValues: {
        activities: activitiesFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
