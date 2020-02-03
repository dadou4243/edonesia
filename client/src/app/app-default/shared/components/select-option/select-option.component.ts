import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Inject,
  Optional,
  NgZone,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { merge, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOptionComponent implements OnInit, OnDestroy {
  @Input() placeholder: string;
  @Input() options = [];
  @Input() selectedValue: any;
  @Output() selectPicked = new EventEmitter();

  @ViewChild('dropdown', { static: false }) dropdown;
  @ViewChild('selector', { static: false }) selector;

  isOpen = false;
  selectedOption: string;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private zone: NgZone,
    @Optional() @Inject(DOCUMENT) private document: any,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._handleOutsideClick();
    this.selectedOption = this.placeholder || 'Select an option';
    console.log('this.options', this.options);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  onInputClick() {
    this.isOpen = !this.isOpen;
  }

  onSelectOption(option) {
    this.selectedOption = option;
    this.selectPicked.emit(option);
    this.isOpen = false;
  }

  private _handleOutsideClick() {
    if (!this.document) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      merge(fromEvent(this.document, 'mousedown', { capture: true }))
        .pipe(takeUntil(this.destroy$))
        .subscribe($event => this._checkToClose($event));
    });
  }

  private _checkToClose($event: any) {
    if (
      this.selector.nativeElement.contains($event.target) ||
      (this.dropdown && this.dropdown.nativeElement.contains($event.target))
    ) {
      return;
    }

    // this._zone.run(() => {
    //   this.isOpen = false;
    //   console.log('this.isOpen:', this.isOpen);
    // });

    this.isOpen = false;
    this.cd.detectChanges();
  }
}
