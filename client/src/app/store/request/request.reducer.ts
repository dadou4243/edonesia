import { Action, createReducer, on } from '@ngrx/store';
import * as requestActions from './request.actions';

export interface RequestState {
  steps: any;
  isValid: boolean;
  currentStepIndex: number;
}

export const initialState: RequestState = {
  steps: { isDatePlanned: false },
  isValid: false,
  currentStepIndex: 0
};

const featureReducer = createReducer(
  initialState,
  on(requestActions.SetCurrentIndex, (state, { currentStepIndex }) => ({
    ...state,
    currentStepIndex
  })),
  on(requestActions.SetStepValues, (state, { stepValues }) => ({
    ...state,
    steps: { ...state.steps, ...stepValues }
  }))
);

export function requestReducer(
  state: RequestState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
