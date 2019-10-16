import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Lightpick from 'lightpick';

@Component({
  selector: 'app-dates-trip',
  templateUrl: './dates-trip.component.html',
  styleUrls: ['./dates-trip.component.scss']
})
export class DatesTripComponent implements OnInit {
  @Input() departureDate;
  @Input() arrivalDate;
  @Output() dateConfirmed = new EventEmitter();

  tempDepartureDate;
  tempArrivalDate;

  constructor() {}

  ngOnInit() {
    const picker = new Lightpick({
      field: document.getElementById('start-date'),
      secondField: document.getElementById('end-date'),
      singleDate: false,
      onSelect: (start, end) => {
        this.tempDepartureDate = start ? start.format('DD/MM/YYYY') : '';
        this.tempArrivalDate = end ? end.format('DD/MM/YYYY') : '';

        let str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        console.log('str:', str);
      }
    });
  }

  onClickConfirm() {
    console.log('this.tempArrivalDate:', this.tempArrivalDate);
    this.dateConfirmed.emit({
      arrivalDate: this.tempArrivalDate,
      departureDate: this.tempDepartureDate
    });
  }
}
