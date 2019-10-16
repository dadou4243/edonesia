import { Action, createReducer, on } from '@ngrx/store';
import * as requestActions from './request.actions';

import * as moment from 'moment';

export interface IFormValue {
  isDatePlanned: boolean;
  departureDate: string;
  arrivalDate: string;
  destination: string[];
  numberPeople: number;
  purpose: string[];
  hotelType: string[];
  activities: string[];
}

export interface RequestState {
  formValue: any;
  isValid: boolean;
  currentStepIndex: number;
}

export const initialState: RequestState = {
  formValue: {
    isDatePlanned: false,
    departureDate: moment(new Date())
      .add(1, 'days')
      .format('DD/MM/YYYY'),
    arrivalDate: moment(new Date())
      .add(5, 'days')
      .format('DD/MM/YYYY'),
    destination: [],
    numberPeople: 1,
    purpose: [],
    hotelType: [],
    activities: []
  },
  isValid: false,
  currentStepIndex: 0
};

const featureReducer = createReducer(
  initialState,
  on(requestActions.SetCurrentIndex, (state, { currentStepIndex }) => ({
    ...state,
    currentStepIndex
  })),
  on(requestActions.SetFormValue, (state, { stepValues }) => ({
    ...state,
    formValue: { ...state.formValue, ...stepValues }
  }))
);

export function requestReducer(
  state: RequestState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
