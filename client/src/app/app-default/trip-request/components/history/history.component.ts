import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { historyOptions } from '../../data/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() selectedHistory: string[];
  @Output() historyPicked = new EventEmitter();

  historyOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.historyOptions = historyOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      history: {
        message: 'You must select at least one choice',
        isValid: this.selectedHistory.length > 0
      }
    };

    this.historyPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickHistory(historyFromEvent) {
    console.log('historyFromEvent:', historyFromEvent);
    this.stepValidationObject.history.isValid =
      historyFromEvent.length > 0 ? true : false;

    this.historyPicked.emit({
      stepValues: {
        history: historyFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
