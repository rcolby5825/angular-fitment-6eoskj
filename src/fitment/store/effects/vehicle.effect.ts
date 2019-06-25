import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as vehicleActions from '../actions/vehicle.action';
import * as fromServices from '../../services/fitment.service';

@Injectable()
export class VehicleEffects{
  constructor(
    private actions$: Actions,
    private fitmentService: fromServices.FitmentService
  ){}

  @Effect()
  loadYears$ = this.actions$.pipe(
    ofType(vehicleActions.LOAD_YEARS),
    switchMap( () => {
      return this.fitmentService.getYears().pipe(
        map(years => new vehicleActions.LoadYearsSuccess(years['year'])),
        catchError(error => of(new vehicleActions.LoadYearsFail(error)))
      )
    })
  )

}
