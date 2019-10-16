import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from './request.reducer';

export const getRequestState = createFeatureSelector<RequestState>('request');

export const getCurrentStepIndex = createSelector(
  getRequestState,
  (requestState: RequestState): number => requestState.currentStepIndex
);

export const getStepsValues = createSelector(
  getRequestState,
  (requestState: RequestState): number => requestState.steps
);
