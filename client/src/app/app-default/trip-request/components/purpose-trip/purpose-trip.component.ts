import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-purpose-trip',
  templateUrl: './purpose-trip.component.html',
  styleUrls: ['./purpose-trip.component.scss']
})
export class PurposeTripComponent implements OnInit, OnChanges {
  @Input() purpose: string[];
  @Input() purposeOptions: string[];

  @Output() purposePicked = new EventEmitter();

  pickedPurposes: string[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.pickedPurposes = this.purpose;
  }

  onPickPurpose(purpose) {
    const isPurposeAlreadyPicked = this.purpose.includes(purpose);

    if (isPurposeAlreadyPicked) {
      this.pickedPurposes = this.purpose.filter(purp => purp !== purpose);
    } else {
      this.pickedPurposes.push(purpose);
    }

    this.purposePicked.emit({ purpose: this.pickedPurposes });
  }
}
