import { createAction, props } from '@ngrx/store';

export const LoadUserInfo = createAction('[User] Load User Info');

export const SetUserInfo = createAction(
  '[User] Set User Info',
  props<{ userInfo: any }>()
);

export const SubmitForm = createAction('[Stepper] Submit Form');

export const ClearStepsData = createAction('[Stepper] Clear Steps Data');
