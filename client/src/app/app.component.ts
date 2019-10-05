import { Component, OnInit } from '@angular/core';
import { LoadUserInfo } from './store/user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(LoadUserInfo());
  }
}
