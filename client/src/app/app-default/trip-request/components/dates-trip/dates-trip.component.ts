import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import Lightpick from 'lightpick';
import * as moment from 'moment';

@Component({
  selector: 'app-dates-trip',
  templateUrl: './dates-trip.component.html',
  styleUrls: ['./dates-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatesTripComponent implements OnInit, OnChanges, AfterViewInit {
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
    this.stepValidationObject = {
      arrivalDate: {
        message: 'You must enter a valid arrival date',
        isValid: !(this.arrivalDate === '')
      },
      departureDate: {
        message: 'You must enter a valid departure date',
        isValid: !(this.departureDate === '')
      },
      date: {
        message: 'The departure date must be before the arrival date',
        isValid: !(this.departureDate > this.arrivalDate)
      }
    };
  }

  ngAfterViewInit() {
    const picker = new Lightpick({
      field: document.getElementById('date-input'),
      singleDate: false,
      minDate: moment(new Date()),
      onSelect: this.onSelect
    });
  }

  onSelect = (start, end) => {
    this.tempDepartureDate = start ? start.format('DD/MM/YYYY') : '';
    this.tempArrivalDate = end ? end.format('DD/MM/YYYY') : '';

    this.stepValidationObject.departureDate.isValid =
      start === null || '' ? false : true;

    this.stepValidationObject.arrivalDate.isValid =
      end === null || '' ? false : true;

    this.stepValidationObject.date.isValid = !(start > end);

    this.dateConfirmed.emit({
      stepValues: {
        arrivalDate: this.tempArrivalDate,
        departureDate: this.tempDepartureDate
      },
      validationErrors: this.stepValidationObject
    });
  };

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
