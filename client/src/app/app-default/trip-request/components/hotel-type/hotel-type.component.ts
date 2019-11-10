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
  @Input() selectedTypes: string[];
  @Output() pickedHotelType = new EventEmitter();

  hotelOptions: any[];

  constructor() {
    this.hotelOptions = hotelOptions;
  }

  ngOnInit() {}

  onPickHotelType(hotelType) {
    let selectedHotelTypes = this.selectedTypes;
    const isDestinationAlreadyPicked = this.selectedTypes.includes(hotelType);
    if (isDestinationAlreadyPicked) {
      selectedHotelTypes = this.selectedTypes.filter(
        type => type !== hotelType
      );
    } else {
      selectedHotelTypes.push(hotelType);
    }

    this.pickedHotelType.emit({ hotelType: selectedHotelTypes });
  }
}
