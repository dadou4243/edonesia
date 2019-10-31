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

  @Input() destinationOptions: string[];
  @Input() destinations: string[];
  @Output() destinationPicked = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // console.log(this.destinationOptions);
  }

  ngOnChanges() {
    this.pickedDestinations = this.destinations;
  }

  onPickDestination(destination) {
    // console.log('destination:', destination);
    // console.log('this.destinations:', this.destinations);
    const isDestinationAlreadyPicked = this.destinations.includes(destination);
    if (destination !== 'Unknown') {
      this.pickedDestinations = this.destinations.filter(
        dest => dest !== 'Unknown'
      );
      if (isDestinationAlreadyPicked) {
        this.pickedDestinations = this.destinations.filter(
          dest => dest !== destination
        );
      } else {
        this.pickedDestinations.push(destination);
      }
    } else {
      this.pickedDestinations = ['Unknown'];
    }

    // console.log('pickedDestinations:', this.pickedDestinations);
    this.destinationPicked.emit({
      destinations: this.pickedDestinations
    });
  }

  onClickConfirm() {
    this.destinationPicked.emit({
      destination: this.pickedDestinations
    });
  }
}
