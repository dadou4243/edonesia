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

  ngOnInit() {
    const picker = new Lightpick({
      field: document.getElementById('start-date'),
      secondField: document.getElementById('end-date'),
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

  ngOnChanges() {
    this.tempDepartureDate = this.departureDate;
    this.tempArrivalDate = this.arrivalDate;
  }

  onDepartureDateChange(date) {
    console.log('date:', date);
    this.tempDepartureDate = date;

    this.stepValidationObject.departureDate.isValid =
      this.tempDepartureDate === '' ? false : true;

    this.dateConfirmed.emit({
      stepValues: {
        departureDate: this.tempDepartureDate
      },
      validationErrors: this.stepValidationObject
    });
  }

  onArrivaleDateChange(date) {
    console.log('date:', date);
    this.tempArrivalDate = date;

    this.stepValidationObject.arrivalDate.isValid =
      this.tempArrivalDate === '' ? false : true;

    this.dateConfirmed.emit({
      stepValues: {
        arrivalDate: this.tempArrivalDate
      },
      validationErrors: this.stepValidationObject
    });
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
