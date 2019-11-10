import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-trip-activities',
  templateUrl: './trip-activities.component.html',
  styleUrls: ['./trip-activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripActivitiesComponent implements OnInit {
  @Input() selectedActivities: string[];
  @Input() activityOptions: any[];
  @Output() pickedActivityType = new EventEmitter();

  pickedActivities: string[];
  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    this.stepValidationObject = {
      activities: {
        message: 'You must select at least one choice',
        isValid: this.selectedActivities.length > 0
      }
    };
  }

  onPickActivity(activitiesFromEvent) {
    console.log('activitiesFromEvent', activitiesFromEvent);

    this.stepValidationObject.activities.isValid =
      activitiesFromEvent > 0 ? true : false;

    this.pickedActivityType.emit({
      stepValues: {
        activities: activitiesFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
