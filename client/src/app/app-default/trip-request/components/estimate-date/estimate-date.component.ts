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

  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    console.log('this.estimateMonth:', this.estimateMonth);

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
