import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActivitiesComponent } from './main-activities.component';

describe('MainActivitiesComponent', () => {
  let component: MainActivitiesComponent;
  let fixture: ComponentFixture<MainActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
