import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { cultureOptions } from '../../data/culture';

@Component({
  selector: 'app-local-traditions',
  templateUrl: './local-traditions.component.html',
  styleUrls: ['./local-traditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalTraditionsComponent implements OnInit {
  @Input() selectedCulture: string[];
  @Output() clturePicked = new EventEmitter();

  cultureOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.cultureOptions = cultureOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      culture: {
        message: 'You must select at least one choice',
        isValid: this.selectedCulture.length > 0
      }
    };

    this.clturePicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickCulture(cultureFromEvent) {
    console.log('historyFromEvent:', cultureFromEvent);
    this.stepValidationObject.culture.isValid =
      cultureFromEvent.length > 0 ? true : false;

    this.clturePicked.emit({
      stepValues: {
        culture: cultureFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
