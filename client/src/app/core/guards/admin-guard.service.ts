import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
// import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
// import { getLoggedIn } from 'src/app/authentication/state/user.selectors';
// import {
//   LoginRedirect,
//   UserSignOut
// } from 'src/app/authentication/state/user.actions';
import { JwtService } from '../services/jwt.service';
import { Store, select } from '@ngrx/store';
import { getUserInfo } from 'src/app/store/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<any>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getUserInfo),
      map(userInfo => {
        console.log('userInfo:', userInfo);
        const isAdmin = userInfo.role === 'admin';
        if (!isAdmin) {
          this.router.navigate(['', 'login']);
        }
        return isAdmin;
      })
    );
  }
}
