import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { activityOptions } from '../../data/activities';

@Component({
  selector: 'app-trip-activities',
  templateUrl: './trip-activities.component.html',
  styleUrls: ['./trip-activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripActivitiesComponent implements OnInit {
  @Input() selectedActivities: string[];
  activityOptions: any[];
  @Output() pickedActivityType = new EventEmitter();

  stepValidationObject: any;

  constructor() {
    this.activityOptions = activityOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      activities: {
        message: 'You must select at least three activity categories',
        isValid: this.selectedActivities.length >= 3
      }
    };

    this.pickedActivityType.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickActivity(activitiesFromEvent) {
    console.log('activitiesFromEvent', activitiesFromEvent);

    this.stepValidationObject.activities.isValid =
      activitiesFromEvent.length >= 3 ? true : false;

    this.pickedActivityType.emit({
      stepValues: {
        activities: activitiesFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
