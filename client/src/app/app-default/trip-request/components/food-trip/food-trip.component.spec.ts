import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTripComponent } from './food-trip.component';

describe('FoodTripComponent', () => {
  let component: FoodTripComponent;
  let fixture: ComponentFixture<FoodTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
