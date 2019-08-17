import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySuggestionsComponent } from './activity-suggestions.component';

describe('ActivitySuggestionsComponent', () => {
  let component: ActivitySuggestionsComponent;
  let fixture: ComponentFixture<ActivitySuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
