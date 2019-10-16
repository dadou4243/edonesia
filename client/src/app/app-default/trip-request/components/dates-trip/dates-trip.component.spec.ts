import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesTripComponent } from './dates-trip.component';

describe('DatesTripComponent', () => {
  let component: DatesTripComponent;
  let fixture: ComponentFixture<DatesTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
