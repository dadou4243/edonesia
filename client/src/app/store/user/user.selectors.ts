import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>('user');

export const getIsLoggedIn = createSelector(
  getUserState,
  (userState: UserState): boolean => userState.isLoggedIn
);

export const getUserInfo = createSelector(
  getUserState,
  (userState: UserState): any => userState.userInfo
);

// export const getStepsData = createSelector(
//   getStepperState,
//   (stepperState: StepperState): IStepData[] => stepperState.stepsData
// );

// export const getActiveStepData = createSelector(
//   getStepsData,
//   getActiveStepIndex,
//   (stepsData: IStepData[], activeStepIndex: number): IStepData =>
//     stepsData[activeStepIndex]
// );

// export const getIsStepperValid = createSelector(
//   getStepsData,
//   (stepsData: IStepData[]): boolean =>
//     stepsData.every(step => step.value !== '')
// );

// export const getIsFormSubmitted = createSelector(
//   getStepperState,
//   (stepperState: StepperState) => stepperState.isFormSubmitted
// );
