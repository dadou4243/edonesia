import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        const isAdmin = userInfo.role === 'admin';
        if (!isAdmin) {
          this.router.navigate(['', 'login']);
        }
        return isAdmin;
      })
    );
  }
}
