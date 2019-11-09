import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningTripComponent } from './dining-trip.component';

describe('DiningTripComponent', () => {
  let component: DiningTripComponent;
  let fixture: ComponentFixture<DiningTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
