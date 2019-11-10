import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { destinationOptions } from '../../data/destinations';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDestinationComponent implements OnInit {
  @Input() selectedDestinations: string[];
  @Output() destinationPicked = new EventEmitter();

  destinationOptions: any;
  stepValidationObject: any;

  constructor() {
    this.destinationOptions = destinationOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      destination: {
        message: 'You must select at least one choice',
        isValid: this.selectedDestinations.length > 0
      }
    };

    this.destinationPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickDestination(destinationsFromEvent) {
    console.log('destinationsFromEvent:', destinationsFromEvent);

    this.stepValidationObject.destination.isValid =
      destinationsFromEvent.length > 0 ? true : false;

    this.destinationPicked.emit({
      stepValues: {
        destinations: destinationsFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
