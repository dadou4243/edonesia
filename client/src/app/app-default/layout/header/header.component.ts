import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  userInfo: Observable<any>;
  @Output() clickLogout = new EventEmitter();

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.userInfo = this.store.pipe(select(getUserInfo));
  }

  logout() {
    console.log('LOGOUT');
    this.clickLogout.emit();
  }
}
