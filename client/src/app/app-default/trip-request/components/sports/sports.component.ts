import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { sportsOptions } from '../../data/sports';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsComponent implements OnInit {
  @Input() selectedSports: string[];
  @Output() pickedSport = new EventEmitter();

  sportsOptions: any;
  stepValidationObject: any;

  constructor() {
    this.sportsOptions = sportsOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      sports: {
        message: 'You must select at least one choice',
        isValid: this.selectedSports.length > 0
      }
    };

    this.pickedSport.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickSport(sportsFromEvent) {
    console.log('sportsFromEvent', sportsFromEvent);

    this.stepValidationObject.sports.isValid =
      sportsFromEvent.length > 0 ? true : false;

    this.pickedSport.emit({
      stepValues: {
        sports: sportsFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
