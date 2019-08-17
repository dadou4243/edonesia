import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSupportComponent } from './about-support.component';

describe('AboutSupportComponent', () => {
  let component: AboutSupportComponent;
  let fixture: ComponentFixture<AboutSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
