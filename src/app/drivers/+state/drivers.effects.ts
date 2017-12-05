import { Injectable} from '@angular/core';

import { Actions, Effect, toPayload } from '@ngrx/effects';



@Injectable()
export class DriversEffects {
    @Effect()
    loadDriverViewData$ = this.actions$
        .ofType(<DriversActions.LoadDriverViewData)
        .pipe(
            switchMap(action => {
                return this.driversService.loadDriverViewData(action.payload).pipe(
                    map(river => {
                        return new DriversActions.LoadAction();
                    }),
                    catchError((error: HttpErrorResponse) => {
                        console.error('Fail: LoadDriverViewData');
                        const message =
                            error.status === 404 ? 'Drivers Licence not found' : error.statusText;
                        return of(new UserActions.LoadDriverError(message));
                    })
                );
            })
        );
}
