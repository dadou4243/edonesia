import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { volcanoOptions } from '../../data/volcano';

@Component({
  selector: 'app-volcano',
  templateUrl: './volcano.component.html',
  styleUrls: ['./volcano.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolcanoComponent implements OnInit, OnDestroy {
  @Input() selectedVolcano: number;
  @Input() typedVolcanoPlaces: number;
  @Output() pickedVolcano = new EventEmitter();
  @Output() volcanoPlacesChanged = new EventEmitter();

  stepValidationObject: any;
  volcanoOptions: any;
  volcanoPlaces: any;

  constructor() {
    this.volcanoOptions = volcanoOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      volcano: {
        message: 'You must pick an answer',
        isValid: this.selectedVolcano !== null
      }
    };

    this.pickedVolcano.emit({
      validationErrors: this.stepValidationObject
    });
  }

  ngOnDestroy() {
    this.volcanoPlacesChanged.emit({
      stepValues: {
        volcanoPlaces: this.volcanoPlaces
      },
      validationErrors: this.stepValidationObject
    });
  }

  updateVolcanoPlaces(event) {
    this.volcanoPlaces = event.target.value;
  }

  onVolcanoChange(volcanoFromEvent) {
    console.log('numberPeopleFromEvent:', volcanoFromEvent);
    this.stepValidationObject.volcano.isValid =
      volcanoFromEvent !== null ? true : false;

    this.pickedVolcano.emit({
      stepValues: {
        volcano: volcanoFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
