import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-planned',
  templateUrl: './date-planned.component.html',
  styleUrls: ['./date-planned.component.scss']
})
export class DatePlannedComponent implements OnInit {
  datePlanned = true;

  @Output() clickedDatePlanned = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickDatePlanned(answer) {
    this.datePlanned = answer;
    this.clickedDatePlanned.emit(answer);
  }
}
