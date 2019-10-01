import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuestionsComponent } from './request-questions.component';

describe('RequestQuestionsComponent', () => {
  let component: RequestQuestionsComponent;
  let fixture: ComponentFixture<RequestQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
