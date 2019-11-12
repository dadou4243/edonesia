import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { hotelOptions } from '../../data/hotels';

@Component({
  selector: 'app-hotel-type',
  templateUrl: './hotel-type.component.html',
  styleUrls: ['./hotel-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelTypeComponent implements OnInit {
  @Input() selectedHotel: string[];
  @Output() hotelPicked = new EventEmitter();

  hotelOptions: any[];
  stepValidationObject: any;

  constructor() {
    this.hotelOptions = hotelOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      hotel: {
        message: 'You must select at least one choice',
        isValid: this.selectedHotel.length > 0
      }
    };

    this.hotelPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickHotel(hotelFromEvent) {
    console.log('historyFromEvent:', hotelFromEvent);
    this.stepValidationObject.hotel.isValid =
      hotelFromEvent.length > 0 ? true : false;

    this.hotelPicked.emit({
      stepValues: {
        hotelType: hotelFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
