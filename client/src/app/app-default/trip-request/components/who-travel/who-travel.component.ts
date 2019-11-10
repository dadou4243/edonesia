import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-who-travel',
  templateUrl: './who-travel.component.html',
  styleUrls: ['./who-travel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoTravelComponent implements OnInit {
  @Input() showConfirm;
  @Input() numberPeople: number;
  @Output() pickedNumberPeople = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNumberPeopleChange(value) {
    console.log('value:', value.target.value);
    this.pickedNumberPeople.emit({ numberPeople: value.target.value });
  }

  onClickConfirm() {
    console.log('confirm');
    this.pickedNumberPeople.emit();
  }
}
