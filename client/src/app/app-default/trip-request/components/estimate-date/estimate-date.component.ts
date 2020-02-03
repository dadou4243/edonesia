import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-estimate-date',
  templateUrl: './estimate-date.component.html',
  styleUrls: ['./estimate-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstimateDateComponent implements OnInit {
  @Input() estimateMonth: string;
  @Input() estimateDays;
  @Output() estimateDateChanged = new EventEmitter();

  options = [
    {
      value: 'january',
      label: 'January'
    },
    {
      value: 'february',
      label: 'February'
    },
    {
      value: 'march',
      label: 'March'
    },
    {
      value: 'april',
      label: 'April'
    }
  ];

  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    this.stepValidationObject = {
      estimateMonth: {
        message: 'You must chose a month',
        isValid: !(this.estimateMonth === '')
      },
      estimateDays: {
        message: 'You must enter a number of days',
        isValid: !(this.estimateDays === null)
      }
    };

    this.estimateDateChanged.emit({
      stepValues: {},
      validationErrors: this.stepValidationObject
    });
  }

  onEstimateDaysChange(value) {
    this.stepValidationObject.estimateDays.isValid =
      value === null || '' ? false : true;

    this.estimateDateChanged.emit({
      stepValues: {
        estimateDays: value
      },
      validationErrors: this.stepValidationObject
    });
  }

  onEstimateMonthChange(value) {
    this.stepValidationObject.estimateMonth.isValid =
      value === '' ? false : true;

    this.estimateDateChanged.emit({
      stepValues: {
        estimateMonth: value
      },
      validationErrors: this.stepValidationObject
    });
  }
}
