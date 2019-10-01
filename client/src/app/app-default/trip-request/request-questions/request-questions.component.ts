import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-questions',
  templateUrl: './request-questions.component.html',
  styleUrls: ['./request-questions.component.scss']
})
export class RequestQuestionsComponent implements OnInit {
  currentStep = 1;
  datePlanned = true;

  constructor() {}

  ngOnInit() {}

  onClickNext() {
    this.currentStep++;
  }

  onClickPrevious() {
    this.currentStep--;
  }

  onClickDatePlanned(answer) {
    this.datePlanned = answer;
    this.onClickNext();
  }
}
