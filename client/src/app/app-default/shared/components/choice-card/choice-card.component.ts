import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrls: ['./choice-card.component.scss']
})
export class ChoiceCardComponent implements OnInit {
  @Input() isActive: boolean;
  @Input() choiceData: any;
  @Output() choiceClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChoiceClicked() {
    this.choiceClicked.emit(this.choiceData);
  }
}
