import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss']
})
export class TripDestinationComponent implements OnInit, OnChanges {
  @Input() destinationOptions: any;
  @Input() selectedDestinations: string[];
  @Output() destinationPicked = new EventEmitter();

  pickedDestinations: string[];
  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    this.stepValidationObject = {
      destination: {
        message: 'You must select at least one choice',
        isValid: this.selectedDestinations.length > 0
      }
    };
  }

  ngOnChanges() {
    console.log('this.selectedDestinations', this.selectedDestinations);
    // this.pickedDestinations = this.selectedDestinations;
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
