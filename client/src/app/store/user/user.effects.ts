import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GiftCardsService } from '../../core/services/giftCards.service';
import { LoadUserInfo, SetUserInfo } from './user.actions';
import { UserService } from 'src/app/core/services/user.service';
import { JwtService } from 'src/app/core/services/jwt.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  //   loadMovies$ = createEffect(
  //     () => this.actions$.pipe(ofType[LoadUserInfo]),
  //     tap(() => {console.log('HEY')},
  //     { dispatch: false }
  //     // this.actions$.pipe(ofType('[Movies Page] Load Movies'),mergeMap(() =>this.moviesService.getAll().pipe(
  //     //     //   map(movies => ({
  //     //     //     type: '[Movies API] Movies Loaded Success',
  //     //     //     payload: movies
  //     //     //   })),
  //     //     //   catchError(() => EMPTY)
  //     //     // ))
  //     // )
  //   );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadUserInfo),
      mergeMap(() =>
        this.userService.getUserInfo('5d65023435a0033378f476fc').pipe(
          map((userInfo: any) => {
            // console.log('userInfo:', userInfo);
            // this.jwtService.saveToken(userInfo.token);
            return SetUserInfo({ userInfo });
          })
        )
      )
    )
  );
}
