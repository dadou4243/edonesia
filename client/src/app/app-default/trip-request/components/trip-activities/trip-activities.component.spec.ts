import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripActivitiesComponent } from './trip-activities.component';

describe('TripActivitiesComponent', () => {
  let component: TripActivitiesComponent;
  let fixture: ComponentFixture<TripActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
