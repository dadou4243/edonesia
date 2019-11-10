import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-volcano',
  templateUrl: './volcano.component.html',
  styleUrls: ['./volcano.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolcanoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
