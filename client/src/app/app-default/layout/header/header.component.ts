import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserState, getUserInfo } from 'src/app/store/user';
import { JwtService } from 'src/app/core/services/jwt.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstName: string;

  constructor(
    private store: Store<UserState>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.store.pipe(select(getUserInfo)).subscribe(userInfo => {
      console.log('userInfo:', userInfo);
      if (userInfo.firstName) {
        this.firstName = userInfo.firstName;
      }
    });
  }

  logout() {
    this.authService.logOut();
  }
}
