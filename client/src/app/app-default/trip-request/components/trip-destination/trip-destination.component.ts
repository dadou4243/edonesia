import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { destinationOptions } from '../../data/destinations';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDestinationComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() selectedDestinations: string[];
  @Input() typedPreciseAreaValue: string[];
  @Output() destinationPicked = new EventEmitter();
  @Output() preciseAreaChanged = new EventEmitter();

  // @ViewChild('topElement', { static: false }) topElement: ElementRef;

  preciseAreaValue: string[];
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

  ngAfterViewInit() {
    // console.log(this.topElement);
    // this.topElement.nativeElement.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // });
  }

  ngOnDestroy() {
    this.preciseAreaChanged.emit({
      stepValues: {
        preciseArea: this.preciseAreaValue
      },
      validationErrors: this.stepValidationObject
    });
  }

  updatePreciseAreaValue(event) {
    this.preciseAreaValue = event.target.value;
  }

  onPickDestination(destinationsFromEvent) {
    // console.log('destinationsFromEvent:', destinationsFromEvent);

    this.stepValidationObject.destination.isValid =
      destinationsFromEvent.length > 0 ? true : false;

    this.destinationPicked.emit({
      stepValues: {
        destinations: destinationsFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }

  // onChangePreciseArea(event) {
  //   console.log('event:', event);

  //   this.preciseAreaChanged.emit({
  //     stepValues: {
  //       preciseArea: event.target.value
  //     },
  //     validationErrors: this.stepValidationObject
  //   });
  // }
}
