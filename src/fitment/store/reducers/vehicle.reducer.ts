// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions. 
// Return new state

import * as fromVehicle from '../actions/vehicle.action';

export interface VehicleState {
  years: string[],
  loaded: boolean,
  loading: boolean
}

export const initialState: VehicleState = {
  years: [],
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {

  switch(action.type){

    case fromVehicle.LOAD_YEARS: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        years: action.payload
      }
    }
  }

  return state;
}

// Creating slices of state to be used by the selectors in /reducers/index.ts.
export const getYears = (state: VehicleState) => state.years;