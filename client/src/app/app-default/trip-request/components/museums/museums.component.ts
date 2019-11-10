import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuseumsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
