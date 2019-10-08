import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GiftCardsService } from '../../core/services/giftCards.service';
import {
  LoadUserInfo,
  SetUserInfo,
  LoginSuccess,
  Login,
  LogoutSuccess,
  Logout
} from './user.actions';
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
      mergeMap(action =>
        this.authService.logIn(action.loginInfo).pipe(
          map((res: any) => {
            // console.log('userInfo:', res);
            this.jwtService.saveToken(res.token);
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
      mergeMap(action => {
        // console.log('userID LoadUserInfo Effect:', action.userID);
        return this.userService.getUserInfo(action.userID).pipe(
          map((userInfo: any) => {
            // console.log('userInfo:', userInfo);
            return SetUserInfo({ userInfo });
          })
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Logout),
      map(() => {
        this.jwtService.destroyToken();
        return LogoutSuccess();
      })
    )
  );
}
