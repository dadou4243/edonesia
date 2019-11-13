import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { nightOptions } from '../../data/night';

@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.component.html',
  styleUrls: ['./nightlife.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NightlifeComponent implements OnInit {
  @Input() selectedNight: string[];
  @Output() nightPicked = new EventEmitter();

  nightOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.nightOptions = nightOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      night: {
        message: 'You must select at least one choice',
        isValid: this.selectedNight.length > 0
      }
    };

    this.nightPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickNight(nightFromEvent) {
    console.log('nightFromEvent:', nightFromEvent);
    this.stepValidationObject.night.isValid =
      nightFromEvent.length > 0 ? true : false;

    this.nightPicked.emit({
      stepValues: {
        night: nightFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
