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

  constructor(private actions$: Actions, private driversService: DriversService) {}

  // commented out until dashboard is created
//   @Effect()
//   loadDriverViewData$ = this.actions$
//     .ofType<DriversActions.LoadDriverViewDataAction>(DriversActions.LOAD_DRIVER_VIEW_DATA)
//     .pipe(
//       switchMap(action => {
//         return this.driversService.getDriverRegoInfo(action.payload).pipe(
//           map(driver => {
//             return new DriversActions.LoadDriverViewDataAction(driver);
//           }),
//           catchError((error: HttpErrorResponse) => {
//               console.error('Fail: LoadDriverViewDataAction');
//               const message =
//                   error.status === 404 ? 'Drivers Licence not found' : error.statusText;
//               return of(new DriversActions.SubmitErrorAction(message));
//           })
//         );
//       })
//     );

  @Effect()
  submitDriver$ = this.actions$
    .ofType<DriversActions.SubmitAction>(DriversActions.SUBMIT)
    .pipe(
      switchMap(action => {
          // delete once created
        return this.driversService.saveDriver(action.payload)
          .pipe(
            map(driver => {
              if (driver) {
                return new DriversActions.LoadDriverViewDataAction(driver);
              } else {
                return new DriversActions.SubmitSuccessAction(null);
              }
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('Fail: LoadDriverViewData');
                const message =
                    error.status === 404 ? 'Drivers Licence not saved' : error.statusText;
                return of(new DriversActions.SubmitErrorAction(message));
            })
          );
      })
    );
}
