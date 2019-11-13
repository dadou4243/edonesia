import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { diningOptions } from '../../data/dining';
import { eatHandsOptions } from '../../data/eatHands';

@Component({
  selector: 'app-dining-trip',
  templateUrl: './dining-trip.component.html',
  styleUrls: ['./dining-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiningTripComponent implements OnInit {
  @Input() selectedDining: string[];
  @Input() selectedEatHands: string[];
  @Output() pickedDining = new EventEmitter();
  @Output() pickedEatHands = new EventEmitter();

  diningOptions: any;
  eatHandsOptions: any;
  stepValidationObject: any;

  constructor() {
    this.diningOptions = diningOptions;
    this.eatHandsOptions = eatHandsOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      dining: {
        message: 'You must select at least 2 dining environment categories',
        isValid: this.selectedDining.length >= 2
      }
    };

    this.pickedDining.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickDining(diningFromEvent) {
    console.log('diningFromEvent', diningFromEvent);

    this.stepValidationObject.dining.isValid =
      diningFromEvent.length >= 2 ? true : false;

    this.pickedDining.emit({
      stepValues: {
        dining: diningFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }

  onPickEatHands(eatHandsFromEvent) {
    console.log('eatHandsFromEvent:', eatHandsFromEvent);

    this.pickedEatHands.emit({
      stepValues: {
        eatHands: eatHandsFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
