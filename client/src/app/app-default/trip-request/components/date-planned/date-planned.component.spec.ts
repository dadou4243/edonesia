import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePlannedComponent } from './date-planned.component';

describe('DatePlannedComponent', () => {
  let component: DatePlannedComponent;
  let fixture: ComponentFixture<DatePlannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePlannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePlannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
