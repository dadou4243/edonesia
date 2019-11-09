import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalTripComponent } from './historical-trip.component';

describe('HistoricalTripComponent', () => {
  let component: HistoricalTripComponent;
  let fixture: ComponentFixture<HistoricalTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
