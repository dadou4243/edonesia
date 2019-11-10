import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { naturalOptions } from '../../data/natural';

@Component({
  selector: 'app-natural-wonders',
  templateUrl: './natural-wonders.component.html',
  styleUrls: ['./natural-wonders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NaturalWondersComponent implements OnInit {
  @Input() selectedNatural: string[];
  @Output() naturalPicked = new EventEmitter();

  naturalOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.naturalOptions = naturalOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      natural: {
        message: 'You must select at least one choice',
        isValid: this.selectedNatural.length > 0
      }
    };

    this.naturalPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickNatural(naturalFromEvent) {
    console.log('naturalFromEvent:', naturalFromEvent);
    this.stepValidationObject.natural.isValid =
      naturalFromEvent.length > 0 ? true : false;

    this.naturalPicked.emit({
      stepValues: {
        natural: naturalFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
