import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-type',
  templateUrl: './hotel-type.component.html',
  styleUrls: ['./hotel-type.component.scss']
})
export class HotelTypeComponent implements OnInit {
  @Input() selectedTypes: string[];
  @Input() hotelOptions: string[];
  @Output() pickedHotelType = new EventEmitter();

  constructor() {}

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
