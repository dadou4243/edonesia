import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingItemComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingItemComponent;
  let fixture: ComponentFixture<BookingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
