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
  @Input() options = [];
  @Output() selectChange = new EventEmitter();

  @ViewChild('dropdown', { static: false }) dropdown;
  @ViewChild('selector', { static: false }) selector;

  isOpen = false;
  selectedOption = 'Select an option';
  private readonly destroy$ = new Subject<void>();

  constructor(
    private zone: NgZone,
    @Optional() @Inject(DOCUMENT) private document: any,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._handleOutsideClick();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  onInputClick() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  onSelectOption(option) {
    this.selectedOption = option;
    this.selectChange.emit(option);
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
