import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfingComponent } from './surfing.component';

describe('SurfingComponent', () => {
  let component: SurfingComponent;
  let fixture: ComponentFixture<SurfingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
