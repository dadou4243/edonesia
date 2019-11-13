import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { diningOptions } from '../../data/dining';

@Component({
  selector: 'app-dining-trip',
  templateUrl: './dining-trip.component.html',
  styleUrls: ['./dining-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiningTripComponent implements OnInit {
  @Input() selectedDining: string[];
  @Output() pickedDining = new EventEmitter();

  diningOptions: any;
  stepValidationObject: any;

  constructor() {
    this.diningOptions = diningOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      dining: {
        message: 'You must select at least 2 choices',
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
}
