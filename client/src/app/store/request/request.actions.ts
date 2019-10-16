import { createAction, props } from '@ngrx/store';
import { ILoginInfo } from '../../core/interfaces/loginInfo.model';

export const SetCurrentIndex = createAction(
  '[User] Set Current Index',
  props<{ currentStepIndex: number }>()
);

export const SetFormValue = createAction(
  '[User] Set Form Value',
  props<{ stepValues: any }>()
);

export const SubmitForm = createAction('[Stepper] Submit Form');

export const ClearStepsData = createAction('[Stepper] Clear Steps Data');
