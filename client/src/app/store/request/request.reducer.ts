import { Action, createReducer, on } from '@ngrx/store';
import * as requestActions from './request.actions';

import * as moment from 'moment';

export interface IFormValue {
  isDatePlanned: boolean;
  departureDate: string;
  arrivalDate: string;
  airport: string;
  estimateMonth: string;
  estimateDays: number;
  destinations: string[];
  numberPeople: number;
  purposes: string[];
  beenInPast: string;
  hotelType: string[];
  activities: string[];
  museums: string[];
  sports: string[];
  history: string[];
  natural: string[];
  spa: string[];
  food: string[];
  dining: string[];
  volcano: string;
  culture: string[];
  night: string[];
}

export interface RequestState {
  formValue: any;
  isValid: boolean;
  currentStepIndex: number;
  currentActivitiesStepIndex: number;
  currentValidationErrors: any;
}

export const initialState: RequestState = {
  formValue: {
    isDatePlanned: true,
    departureDate: null,
    arrivalDate: null,
    airport: '',
    estimateMonth: null,
    estimateDays: null,
    destinations: [],
    numberPeople: null,
    purposes: [],
    beenInPast: null,
    hotelType: [],
    activities: [],
    museums: [],
    sports: [],
    history: [],
    natural: [],
    spa: [],
    food: [],
    dining: [],
    volcano: null,
    culture: [],
    night: []
  },
  isValid: false,
  currentStepIndex: 5,
  currentActivitiesStepIndex: -1,
  currentValidationErrors: {}
};

const featureReducer = createReducer(
  initialState,
  on(requestActions.SetCurrentIndex, (state, { currentStepIndex }) => ({
    ...state,
    currentStepIndex,
    currentValidationErrors: {}
  })),
  on(
    requestActions.SetActivitiesCurrentIndex,
    (state, { currentActivitiesStepIndex }) => ({
      ...state,
      currentActivitiesStepIndex,
      currentValidationErrors: {}
    })
  ),
  on(
    requestActions.SetFormValue,
    (state, { stepValues, validationErrors }) => ({
      ...state,
      formValue: { ...state.formValue, ...stepValues },
      currentValidationErrors: validationErrors
    })
  )
);

export function requestReducer(
  state: RequestState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
