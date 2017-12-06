import { DRIVERS_STATE_NAME, DriversLicenceRegistrationState } from './drivers.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectDriversLicenceState = createFeatureSelector<DriversLicenceRegistrationState>(DRIVERS_STATE_NAME);

export const selectDriversLicence = createSelector(selectDriversLicenceState, (state) => state.driversLicenceRegistration);
export const selectSubmitting = createSelector(selectDriversLicenceState, (state) => state.submitting);
export const selectError = createSelector(selectDriversLicenceState, (state) => state.error);
