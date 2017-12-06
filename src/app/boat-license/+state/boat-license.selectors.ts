import { BOATLICENSEAPPLICATION_STATE_NAME, BoatLicenseApplicationState } from './boat-license.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBoatLicenseState = createFeatureSelector<BoatLicenseApplicationState>(BOATLICENSEAPPLICATION_STATE_NAME);

//Update this when app level states are known
//  export const selectApp = createSelector(selectBoatLicenseState, (state) => state.App);

