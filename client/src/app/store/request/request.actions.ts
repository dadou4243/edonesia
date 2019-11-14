import { createAction, props } from '@ngrx/store';
import { ILoginInfo } from '../../core/interfaces/loginInfo.model';

export const SetCurrentIndex = createAction(
  '[Request] Set Current Index',
  props<{ currentStepIndex: number }>()
);

export const SetActivitiesCurrentIndex = createAction(
  '[Request] Set Activities Current Index',
  props<{ currentActivitiesStepIndex: number }>()
);

export const SetFormValue = createAction(
  '[Request] Set Form Value',
  props<{ stepValues: any; validationErrors: string[] }>()
);

export const SubmitForm = createAction('[Request] Submit Form');

export const ClearStepsData = createAction('[Request] Clear Steps Data');
