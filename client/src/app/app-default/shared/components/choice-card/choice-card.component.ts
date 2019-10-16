import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrls: ['./choice-card.component.scss']
})
export class ChoiceCardComponent implements OnInit {
  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
