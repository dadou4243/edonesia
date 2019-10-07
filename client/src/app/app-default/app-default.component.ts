import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../store/user';

@Component({
  selector: 'app-default',
  templateUrl: './app-default.component.html',
  styleUrls: ['./app-default.component.scss']
})
export class AppDefaultComponent {
  constructor(private store: Store<any>) {}

  onClickLogout() {
    console.log('LOGOUT APP DEFAULT');
    this.store.dispatch(Logout());
  }
}
