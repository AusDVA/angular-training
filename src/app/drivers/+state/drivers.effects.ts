import { Injectable} from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Actions, Effect, toPayload } from '@ngrx/effects';

@Injectable()
export class DriversEffects {
    @Effect()
    loadDriverViewData$ = this.actions$
        // .ofType<DriversActions.LoadDriverViewData>(DriversActions.LOAD_DRIVER_VIEW_DATA)
        .ofType(any)
        .pipe(
            switchMap(action => {
                return this.driversService.loadDriverViewData(action.payload).pipe(
                    map(driver => {
                        // return new DriversActions.LoadDriverViewDataAction(driver);
                        return 'FIXME';
                    })// ,
                    // catchError((error: HttpErrorResponse) => {
                    //     console.error('Fail: LoadDriverViewDataAction');
                    //     const message =
                    //         error.status === 404 ? 'Drivers Licence not found' : error.statusText;
                    //     return of(new UserActions.LoadError(message));
                    // })
                );
            })
        );


    @Effect()
    submitDriver$ = this.actions$
        // .ofType<DriversActions.SubmitDriver>(DriversActions.SUBMIT_DRIVER)
        .ofType(any)
        .pipe(
            switchMap(action => {
                return this.driversService.submitDriverRegistration(action.payload).pipe(
                    map(driver => {
                        if (driver) {
                            // return new DriversActions.LoadDriverViewDataAction(driver);
                            return 'FIXME';
                        } else {
                            // return new DriversActions.SubmitDriverSuccess(null);
                            return 'FIXME';
                        }

                    }   )// ,
                    // catchError((error: HttpErrorResponse) => {
                    //     console.error('Fail: LoadDriverViewData');
                    //     const message =
                    //         error.status === 404 ? 'Drivers Licence not found' : error.statusText;
                    //     return of(new UserActions.SubmitError(message));
                    // })
                );
            })
        );

}
