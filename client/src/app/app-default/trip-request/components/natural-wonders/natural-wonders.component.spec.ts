import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalWondersComponent } from './natural-wonders.component';

describe('NaturalWondersComponent', () => {
  let component: NaturalWondersComponent;
  let fixture: ComponentFixture<NaturalWondersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalWondersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
