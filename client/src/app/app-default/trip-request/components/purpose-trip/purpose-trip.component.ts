import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-purpose-trip',
  templateUrl: './purpose-trip.component.html',
  styleUrls: ['./purpose-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurposeTripComponent implements OnInit {
  @Input() selectedPurposes: string[];
  @Input() purposeOptions: any;
  @Output() purposePicked = new EventEmitter();

  stepValidationObject: any;

  constructor() {}

  ngOnInit() {
    this.stepValidationObject = {
      purposes: {
        message: 'You must select at least one choice',
        isValid: this.selectedPurposes.length > 0
      }
    };

    this.purposePicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickPurpose(purposesFromEvent) {
    console.log('purposesFromEvent:', purposesFromEvent);
    this.stepValidationObject.purposes.isValid =
      purposesFromEvent.length > 0 ? true : false;

    this.purposePicked.emit({
      stepValues: {
        purposes: purposesFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
