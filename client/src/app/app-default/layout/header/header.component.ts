import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserState, getUserInfo } from 'src/app/store/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstName: string;

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.store.pipe(select(getUserInfo)).subscribe(userInfo => {
      console.log('userInfo:', userInfo);
      if (userInfo.firstName) {
        this.firstName = userInfo.firstName;
      }
    });
  }
}
