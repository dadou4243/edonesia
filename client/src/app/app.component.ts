import { Component, OnInit } from '@angular/core';
import { LoadUserInfo, getIsLoggedIn } from './store/user';
import { Store, select } from '@ngrx/store';
import { JwtService } from './core/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>, private jwtService: JwtService) {}

  ngOnInit() {
    this.jwtService.checkIfTokenValid().subscribe(auth => {
      if (auth) {
        const userID = this.jwtService.currentUser.id;
        // console.log(userDetails.id);
        this.store.dispatch(LoadUserInfo({ userID }));
      } else {
        // this.store.dispatch(new UserSignOut());
      }
    });

    // this.store.pipe(select(getIsLoggedIn)).subscribe(isLoggedIn => {
    //   // if (isLoggedIn) {
    //   this.store.dispatch(LoadUserInfo());
    //   // }
    // });
  }
}
