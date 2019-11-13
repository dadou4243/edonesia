import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { spaOptions } from '../../data/spa';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {
  @Input() selectedSpa: string[];
  @Output() pickedSpa = new EventEmitter();

  spaOptions: any;
  stepValidationObject: any;

  constructor() {
    this.spaOptions = spaOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      spa: {
        message: 'You must select at least one choice',
        isValid: this.selectedSpa.length > 0
      }
    };

    this.pickedSpa.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickSpa(spaFromEvent) {
    console.log('spaFromEvent', spaFromEvent);

    this.stepValidationObject.spa.isValid =
      spaFromEvent.length > 0 ? true : false;

    this.pickedSpa.emit({
      stepValues: {
        spa: spaFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
