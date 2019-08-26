import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDefaultComponent } from './app-default.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppDefaultComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppDefaultComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unique-trip'`, () => {
    const fixture = TestBed.createComponent(AppDefaultComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unique-trip');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to unique-trip!'
    );
  });
});
