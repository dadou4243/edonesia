import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../store/user';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-default',
  templateUrl: './app-default.component.html',
  styleUrls: ['./app-default.component.scss']
})
export class AppDefaultComponent implements OnInit {
  showHeader: boolean;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.showHeader = this.router.url === '/request' ? false : true;

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((location: NavigationEnd) => {
        this.showHeader = location.url === '/request' ? false : true;
      });
  }

  onClickLogout() {
    // console.log('LOGOUT APP DEFAULT');
    this.store.dispatch(Logout());
  }
}
