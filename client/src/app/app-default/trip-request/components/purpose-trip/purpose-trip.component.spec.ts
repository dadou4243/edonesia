import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeTripComponent } from './purpose-trip.component';

describe('PurposeTripComponent', () => {
  let component: PurposeTripComponent;
  let fixture: ComponentFixture<PurposeTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
