import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { ChoiceCardComponent } from '../choice-card/choice-card.component';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent
  implements OnInit, OnChanges, AfterContentInit {
  @ContentChildren(ChoiceCardComponent) choices: QueryList<ChoiceCardComponent>;

  @Input() selectedOptions: string[];
  @Output() optionPicked = new EventEmitter();

  pickedOptions: string[];

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log('this.choices:', this.choices);
    this.choices.forEach((choice: ChoiceCardComponent) => {
      choice.choiceClicked.subscribe(c => {
        console.log('choice:', c);
        this.onPickActivity(c.value);
      });
      // t.addEventListener('onMinimized', this.hide);
    });
  }

  ngOnChanges() {
    this.pickedOptions = this.selectedOptions;
  }

  onPickActivity(option) {
    // console.log('option', option);
    const isOptionAlreadyPicked = this.selectedOptions.includes(option);
    // console.log('isOptionAlreadyPicked:', isOptionAlreadyPicked);

    if (option !== 'Unknown') {
      this.pickedOptions = this.selectedOptions.filter(
        (opt: any) => option !== 'Unknown'
      );
      if (isOptionAlreadyPicked) {
        this.pickedOptions = this.selectedOptions.filter(
          (opt: any) => opt !== option
        );
      } else {
        this.pickedOptions.push(option);
      }
    } else {
      this.pickedOptions = ['Unknown'];
    }

    // console.log('this.pickedOptions:', this.pickedOptions);
    this.optionPicked.emit(this.pickedOptions);
  }
}
