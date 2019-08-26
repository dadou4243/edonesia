import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripItemComponent implements OnInit {
  @Input() trip;

  constructor() {}

  ngOnInit() {}
}
