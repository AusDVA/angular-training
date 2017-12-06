import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// TODO: Pull in BoatLicenseApplication Service
import { BoatLicenseApplicationService } from '../boatLicenseApplication.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// TODO: import BoatLicenseActions once available
import * as BoatLicenseActions from './boat-license.actions';

@Injectable()
export class BoatLicenseApplicationEffects {

    @Effect()
    getBoatLicenseApplication$ = this.actions$
        .ofType<BoatLicenseActions.GetAction>(BoatLicenseActions.GET_BOATLICENSEAPPLICATION)
        .pipe(
            switchMap((action) => {
                return this.BoatLicenseApplicationService.getBoatLicenseApplication(action.payload);
            }),
            map((boatLicenseApplication) => {
                return new BoatLicenseActions.LoadAction(boatLicenseApplication);
            }),
            catchError((error) => {
                console.error('BoatLicenseApplication GET EFFECT', error);
                return of(new BoatLicenseActions.LoadAction(null));
            })
        );

    @Effect()
    saveBoatLicenseApplication$ = this.actions$
        .ofType<BoatLicenseActions.SaveAction>(BoatLicenseActions.SAVE_BOATLICENSEAPPLICATION)
        .pipe(
            switchMap((action) => {
                return this.BoatLicenseApplicationService.saveBoatLicenseApplication(action.payload);
            }),
            map((boatLicenseApplication) => {
                if (boatLicenseApplication) {
                    return new BoatLicenseActions.LoadAction(boatLicenseApplication);
                } else {
                    return of();
                }
            }),
            catchError((error) => {
                console.error('BoatLicenseApplication SAVE EFFECT', error);
                return of();
            })
        );

    constructor(
        private actions$: Actions,
        private boatLicenseApplicationService: BoatLicenseApplicationService
    ) { }
}

