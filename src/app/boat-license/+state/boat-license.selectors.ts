import { BOATLICENSEAPPLICATION_STATE_NAME, BoatLicenseApplicationState } from './boat-license.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBoatLicenseState = createFeatureSelector<BoatLicenseApplicationState>(BOATLICENSEAPPLICATION_STATE_NAME);

export const selectBoatingLicense = createSelector(selectBoatLicenseState, (state) => state.boatLicenseApplication);


