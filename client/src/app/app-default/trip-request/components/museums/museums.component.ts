import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { museumsOptions } from '../../data';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuseumsComponent implements OnInit {
  @Input() selectedMuseums: string[];
  @Output() pickedMuseum = new EventEmitter();

  museumOptions: any;

  stepValidationObject: any;

  constructor() {
    this.museumOptions = museumsOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      museums: {
        message: 'You must select at least one choice',
        isValid: this.selectedMuseums.length > 0
      }
    };

    this.pickedMuseum.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickMuseum(museumsFromEvent) {
    console.log('museumsFromEvent', museumsFromEvent);

    this.stepValidationObject.museums.isValid =
      museumsFromEvent.length > 0 ? true : false;

    this.pickedMuseum.emit({
      stepValues: {
        museums: museumsFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
