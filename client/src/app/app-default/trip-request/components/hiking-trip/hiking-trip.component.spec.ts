import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingTripComponent } from './hiking-trip.component';

describe('HikingTripComponent', () => {
  let component: HikingTripComponent;
  let fixture: ComponentFixture<HikingTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
