import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTraditionsComponent } from './local-traditions.component';

describe('LocalTraditionsComponent', () => {
  let component: LocalTraditionsComponent;
  let fixture: ComponentFixture<LocalTraditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalTraditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalTraditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
