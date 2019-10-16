import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateDateComponent } from './estimate-date.component';

describe('EstimateDateComponent', () => {
  let component: EstimateDateComponent;
  let fixture: ComponentFixture<EstimateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
