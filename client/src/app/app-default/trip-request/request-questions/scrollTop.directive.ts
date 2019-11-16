import {
  Directive,
  OnInit,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ExampleDirective implements OnInit, AfterViewInit {
  @Output() stepLoaded = new EventEmitter();

  @ViewChild('.step-number', { static: false }) stepNumberElement: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.stepLoaded.emit();
    this.elementRef.nativeElement.previousElementSibling.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
