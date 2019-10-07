import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

export interface UserState {
  isLoggedIn: boolean;
  userInfo: any;
  isLoginLoading: boolean;
}

export const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {},
  isLoginLoading: false
};

const featureReducer = createReducer(
  initialState,
  on(userActions.SetUserInfo, (state, { userInfo }) => ({
    ...state,
    isLoggedIn: true,
    userInfo
  })),
  on(userActions.Login, state => ({
    ...state,
    isLoginLoading: true
  })),
  on(userActions.LoginSuccess, (state, { userInfo }) => ({
    ...state,
    isLoggedIn: true,
    userInfo,
    isLoginLoading: false
  })),
  on(userActions.LogoutSuccess, () => initialState)
);

export function userReducer(state: UserState | undefined, action: Action) {
  return featureReducer(state, action);
}
