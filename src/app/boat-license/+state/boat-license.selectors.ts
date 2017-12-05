import { BOATLICENSEAPPLICATION_STATE_NAME, BoatLicenseApplicationState } from './boat-license.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBoatLicenseState = createFeatureSelector<BoatLicenseApplicationState>(BOATLICENSEAPPLICATION_STATE_NAME);

export const selectBoatingLicense = createSelector(selectBoatLicenseState, (state) => state.boatLicenseApplication);
export const selectLoading = createSelector(selectBoatLicenseState, (state) => state.loading);
export const selectSaving = createSelector(selectBoatLicenseState, (state) => state.saving);
export const selectError = createSelector(selectBoatLicenseState, (state) => state.error);


