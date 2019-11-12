import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import Lightpick from 'lightpick';

@Component({
  selector: 'app-dates-trip',
  templateUrl: './dates-trip.component.html',
  styleUrls: ['./dates-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatesTripComponent implements OnInit, OnChanges {
  @Input() departureDate;
  @Input() arrivalDate;
  @Input() airport;
  @Output() dateConfirmed = new EventEmitter();

  tempDepartureDate;
  tempArrivalDate;
  error: string;
  stepValidationObject: any;

  constructor() {}

  get tripDates() {
    if (!this.departureDate || !this.arrivalDate) {
      return 'Departure date - Arrival date';
    }
    return `${this.departureDate} - ${this.arrivalDate}`;
  }

  ngOnInit() {
    const picker = new Lightpick({
      field: document.getElementById('date-input'),
      // secondField: document.getElementById('end-date'),
      singleDate: false,
      onSelect: this.onSelect
    });

    this.stepValidationObject = {
      arrivalDate: {
        message: 'You must enter a valid arrival date',
        isValid: !(this.arrivalDate === '')
      },
      departureDate: {
        message: 'You must enter a valid departure date',
        isValid: !(this.departureDate === '')
      }
    };
  }

  onSelect = (start, end) => {
    console.log('end:', end);
    console.log('start:', start);
    this.tempDepartureDate = start ? start.format('DD/MM/YYYY') : '';
    this.tempArrivalDate = end ? end.format('DD/MM/YYYY') : '';

    this.dateConfirmed.emit({
      stepValues: {
        arrivalDate: this.tempArrivalDate,
        departureDate: this.tempDepartureDate
      },
      validationErrors: {}
    });
  };

  showValue(value) {
    console.log('value', value);
  }

  ngOnChanges() {
    this.tempDepartureDate = this.departureDate;
    this.tempArrivalDate = this.arrivalDate;
  }

  onAirportChange(airport) {
    this.dateConfirmed.emit({
      stepValues: {
        airport
      },
      validationErrors: this.stepValidationObject
    });
  }
}
