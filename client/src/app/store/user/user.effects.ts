import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GiftCardsService } from '../../core/services/giftCards.service';
import { LoadUserInfo, SetUserInfo, LoginSuccess, Login } from './user.actions';
import { UserService } from 'src/app/core/services/user.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ILoginInfo } from 'src/app/core/interfaces/loginInfo.model';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      mergeMap(payload =>
        this.authService.logIn(payload).pipe(
          map((res: any) => {
            console.log('userInfo:', res);
            const userInfo = res.user;
            return LoginSuccess({ userInfo });
          })
          // catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadUserInfo),
      mergeMap(({ userID }) => {
        console.log('userID LoadUserInfo Effect:', userID);
        return this.userService.getUserInfo(userID).pipe(
          map((userInfo: any) => {
            console.log('userInfo:', userInfo);
            return SetUserInfo({ userInfo });
          })
        );
      })
    )
  );
}
