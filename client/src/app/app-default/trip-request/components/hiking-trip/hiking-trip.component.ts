import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  treksOptions,
  treksDurationOptions,
  treksDifficultyOptions
} from '../../data/treks';

@Component({
  selector: 'app-hiking-trip',
  templateUrl: './hiking-trip.component.html',
  styleUrls: ['./hiking-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HikingTripComponent implements OnInit {
  @Input() selectedTreks: string[];
  @Input() selectedTreksDuration: string[];
  @Input() selectedTreksDifficulty: string[];
  @Output() pickedTreks = new EventEmitter();

  treksOptions: any[];
  treksDurationOptions: any[];
  treksDifficultyOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.treksOptions = treksOptions;
    this.treksDurationOptions = treksDurationOptions;
    this.treksDifficultyOptions = treksDifficultyOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      treks: {
        message: 'You must select at least one treks and hiking category',
        isValid: this.selectedTreks.length > 0
      },
      treksDuration: {
        message: 'You must pick an answer for treks duration',
        isValid: this.selectedTreksDuration !== null
      },
      treksDifficulty: {
        message: 'You must pick an answer for treks difficulty',
        isValid: this.selectedTreksDifficulty !== null
      }
    };

    this.pickedTreks.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickTreks(treksFromEvent) {
    this.stepValidationObject.treks.isValid =
      treksFromEvent.length > 0 ? true : false;

    this.pickedTreks.emit({
      stepValues: {
        treks: treksFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }

  onPickTreksDuration(treksDurationFromEvent) {
    this.stepValidationObject.treksDuration.isValid =
      (treksDurationFromEvent !== null) !== null ? true : false;

    this.pickedTreks.emit({
      stepValues: {
        treksDuration: treksDurationFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }

  onPickTreksDifficulty(treksDifficultyFromEvent) {
    this.stepValidationObject.treksDifficulty.isValid =
      treksDifficultyFromEvent !== null ? true : false;

    this.pickedTreks.emit({
      stepValues: {
        treksDifficulty: treksDifficultyFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
