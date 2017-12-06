import { Router } from '@angular/router';
import { Injectable} from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { DriversService } from '../drivers.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as DriversActions from './drivers.actions'; // uncomment once created


@Injectable()
export class DriversEffects {
  constructor(
    private actions$: Actions,
    private driversService: DriversService,
    private router: Router
  ) {}

    @Effect()
    loadDriverViewData$ = this.actions$
      .ofType<DriversActions.GetAction>(DriversActions.GET_DRIVER)
      .pipe(
        switchMap(action => {
          return this.driversService.getDriverRegoInfo(action.payload).pipe(
            map(driver => {
              return new DriversActions.LoadAction(driver);
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('Fail: LoadDriverViewDataAction');
                const message =
                    error.status === 404 ? 'Drivers Licence not found' : error.statusText;
                return of(new DriversActions.SubmitErrorAction(message));
            })
          );
        })
      );

  @Effect()
    loadAllDriversViewData$ = this.actions$
      .ofType<DriversActions.GetAllAction>(DriversActions.GET_ALL_DRIVERS)
      .pipe(
        switchMap(action => {
          return this.driversService.getAllDriverRegoInfo().pipe(
            map(driverList => {
              return new DriversActions.LoadAllAction(driverList);
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('Fail: Get All Driver Regos');
                const message =
                    error.status === 404 ? 'No driver list found' : error.statusText;
                return of(new DriversActions.SubmitErrorAction(message));
            })
          );
        })
      );

  @Effect()
  submitDriver$ = this.actions$
    .ofType<DriversActions.SubmitAction>(DriversActions.SUBMIT)
    .pipe(
      switchMap(action => {
        return this.driversService.saveDriver(action.payload).pipe(
          map(driver => {
            if (driver) {
              return new DriversActions.LoadDriverViewDataAction(driver);
            }
            return new DriversActions.SubmitErrorAction(
              'Blank response received'
            );
          }),
          catchError((error: HttpErrorResponse) => {
            console.error('Fail: LoadDriverViewData');
            const message =
              error.status === 404
                ? 'Drivers Licence not saved'
                : error.statusText;
            return of(new DriversActions.SubmitErrorAction(message));
          })
        );
      })
    );

  // only for submit success page
  @Effect()
  loadDriverViewDataActionOnSuccessfulRego$ = this.actions$
    .ofType<DriversActions.LoadDriverViewDataAction>(DriversActions.LOAD_DRIVER_VIEW_DATA)
    .pipe(
      map(driver => {
        this.router.navigate(['driversSuccess']);
        return new DriversActions.SubmitSuccessAction(null);
      })
    );
}
