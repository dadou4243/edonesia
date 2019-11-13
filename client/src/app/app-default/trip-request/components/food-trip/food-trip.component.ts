import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { foodOptions } from '../../data/food';

@Component({
  selector: 'app-food-trip',
  templateUrl: './food-trip.component.html',
  styleUrls: ['./food-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodTripComponent implements OnInit {
  @Input() selectedFood: string[];
  @Output() pickedFood = new EventEmitter();

  foodOptions: any;
  stepValidationObject: any;

  constructor() {
    this.foodOptions = foodOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      food: {
        message: 'You must select at least 3 choices',
        isValid: this.selectedFood.length >= 3
      }
    };

    this.pickedFood.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onPickFood(foodFromEvent) {
    console.log('foodFromEvent', foodFromEvent);

    this.stepValidationObject.food.isValid =
      foodFromEvent.length >= 3 ? true : false;

    this.pickedFood.emit({
      stepValues: {
        food: foodFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
