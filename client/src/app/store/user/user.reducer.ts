import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

const initialStepsData = [
  { label: 'Name', placeholder: 'Enter your name...', value: '' },
  { label: 'Phone', placeholder: 'Enter your phone...', value: '' },
  { label: 'Email', placeholder: 'Enter your email...', value: '' }
];

export interface UserState {
  isLoggedIn: boolean;
  userInfo: any;
  isFormSubmitted: boolean;
}

export const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {},
  isFormSubmitted: false
};

const featureReducer = createReducer(
  initialState,
  on(userActions.SetUserInfo, (state, { userInfo }) => ({
    ...state,
    userInfo
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return featureReducer(state, action);
}
