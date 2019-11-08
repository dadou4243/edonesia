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
        isValid: this.pickedActivities.length > 0
      }
    };
  }

  ngOnChanges() {
    this.pickedActivities = this.selectedActivities;
  }

  onPickActivity(activity) {
    console.log('activity', activity);
    const isDestinationAlreadyPicked = this.selectedActivities.includes(
      activity
    );
    console.log('isDestinationAlreadyPicked:', isDestinationAlreadyPicked);

    if (activity !== 'Unknown') {
      this.pickedActivities = this.selectedActivities.filter(
        (dest: any) => dest !== 'Unknown'
      );
      if (isDestinationAlreadyPicked) {
        this.pickedActivities = this.selectedActivities.filter(
          (dest: any) => dest !== activity
        );
      } else {
        this.pickedActivities.push(activity);
      }
    } else {
      this.pickedActivities = ['Unknown'];
    }

    this.stepValidationObject.destination.isValid =
      this.pickedActivities.length > 0 ? true : false;

    this.pickedActivityType.emit({
      stepValues: {
        activities: this.pickedActivities
      },
      validationErrors: this.stepValidationObject
    });
  }
}
