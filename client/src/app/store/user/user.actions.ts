import { createAction, props } from '@ngrx/store';
import { ILoginInfo } from '../../core/interfaces/loginInfo.model';

export const Login = createAction(
  '[User] Login',
  props<{ loginInfo: ILoginInfo }>()
);

export const LoginSuccess = createAction(
  '[User] Login Success',
  props<{ userInfo: any }>()
);

export const LoadUserInfo = createAction(
  '[User] Load User Info',
  props<{ userID: any }>()
);

export const SetUserInfo = createAction(
  '[User] Set User Info',
  props<{ userInfo: any }>()
);

export const SubmitForm = createAction('[Stepper] Submit Form');

export const ClearStepsData = createAction('[Stepper] Clear Steps Data');
