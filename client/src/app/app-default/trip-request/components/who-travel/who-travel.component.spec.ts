import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoTravelComponent } from './who-travel.component';

describe('WhoTravelComponent', () => {
  let component: WhoTravelComponent;
  let fixture: ComponentFixture<WhoTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
