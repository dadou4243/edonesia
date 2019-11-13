import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { purposeOptions } from '../../data/purposes';
import { beenInPast } from '../../data/beenInPast';

@Component({
  selector: 'app-purpose-trip',
  templateUrl: './purpose-trip.component.html',
  styleUrls: ['./purpose-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurposeTripComponent implements OnInit {
  @Input() selectedPurposes: string[];
  @Input() selectedBeenInPast: string[];
  @Output() purposePicked = new EventEmitter();
  @Output() beenInPastPicked = new EventEmitter();

  purposeOptions: any[];
  beenInPast: any[];
  stepValidationObject: any;

  constructor() {
    this.purposeOptions = purposeOptions;
    this.beenInPast = beenInPast;
  }

  ngOnInit() {
    this.stepValidationObject = {
      purposes: {
        message: 'You must select at least one choice',
        isValid: this.selectedPurposes.length > 0
      },
      beenInPast: {
        message: 'You must select at least one choice',
        isValid: this.selectedBeenInPast !== null
      }
    };

    this.purposePicked.emit({
      validationErrors: this.stepValidationObject
    });
    this.beenInPastPicked.emit({
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

  onPickBeenInPast(beenInPastFromEvent) {
    this.stepValidationObject.beenInPast.isValid =
      beenInPastFromEvent !== null ? true : false;

    this.beenInPastPicked.emit({
      stepValues: {
        beenInPast: beenInPastFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
