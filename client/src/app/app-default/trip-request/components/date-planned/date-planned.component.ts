import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-date-planned',
  templateUrl: './date-planned.component.html',
  styleUrls: ['./date-planned.component.scss']
})
export class DatePlannedComponent implements OnInit {
  datePlanned = true;
  @Input() value;

  @Output() clickedDatePlanned = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickDatePlanned(answer) {
    this.datePlanned = answer;
    this.clickedDatePlanned.emit({
      stepValues: { isDatePlanned: answer },
      validationErrors: []
    });
  }
}
