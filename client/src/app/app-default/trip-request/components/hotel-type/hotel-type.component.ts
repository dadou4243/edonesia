import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { hotelOptions } from '../../data/hotels';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-hotel-type',
  templateUrl: './hotel-type.component.html',
  styleUrls: ['./hotel-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelTypeComponent implements OnInit, OnDestroy {
  @Input() selectedHotel: string[];
  @Input() selectedPriceRange: number[];
  @Output() hotelPicked = new EventEmitter();
  @Output() priceRangeChanged = new EventEmitter();

  hotelOptions: any[];
  stepValidationObject: any;

  minValue: number;
  maxValue: number;
  options: Options = {
    floor: 0,
    ceil: 250,
    translate: (value: number): string => {
      return `$ ${value}`;
    }
  };

  constructor() {
    this.hotelOptions = hotelOptions;
  }

  ngOnInit() {
    this.minValue = this.selectedPriceRange[0];
    this.maxValue = this.selectedPriceRange[1];

    this.stepValidationObject = {
      hotel: {
        message: 'You must select at least one hotel type',
        isValid: this.selectedHotel.length > 0
      }
    };

    this.hotelPicked.emit({
      validationErrors: this.stepValidationObject
    });
  }

  ngOnDestroy() {
    this.priceRangeChanged.emit({
      stepValues: {
        priceRange: [this.minValue, this.maxValue]
      },
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

  onPriceRangeChange(event) {
    this.minValue = event.value;
    this.maxValue = event.highValue;
  }
}
