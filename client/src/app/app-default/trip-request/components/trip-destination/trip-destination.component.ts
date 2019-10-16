import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss']
})
export class TripDestinationComponent implements OnInit, OnChanges {
  pickedDestinations: string[];

  @Input() destinations: string[];
  @Input() destination: string[];
  @Output() destinationPicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.pickedDestinations = this.destination;
  }

  onPickDestination(destination) {
    console.log('this.destination:', this.destination);
    const isDestinationAlreadyPicked = this.destination.includes(destination);
    if (isDestinationAlreadyPicked) {
      this.pickedDestinations = this.destination.filter(
        dest => dest !== destination
      );
    } else {
      this.pickedDestinations.push(destination);
    }
    console.log('pickedDestinations:', this.pickedDestinations);
    this.destinationPicked.emit({
      destination: this.pickedDestinations
    });
  }

  onClickConfirm() {
    this.destinationPicked.emit({
      destination: this.pickedDestinations
    });
  }
}
