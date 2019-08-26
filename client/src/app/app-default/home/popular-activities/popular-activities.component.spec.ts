import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularActivitiesComponent } from './popular-activities.component';

describe('PopularActivitiesComponent', () => {
  let component: PopularActivitiesComponent;
  let fixture: ComponentFixture<PopularActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
