import { DRIVERS_STATE_NAME, DriversLicenceRegistrationState } from './drivers.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface DriversState {
    driversLicenceRegistrationState: DriversLicenceRegistrationState;
}

export const selectDriversState = createFeatureSelector<DriversState>(DRIVERS_STATE_NAME);

export const selectDriversLicenceState = createSelector(selectDriversState, (state) => state.driversLicenceRegistrationState);

export const selectDriversLicence = createSelector(selectDriversLicenceState, (state) => state.driversLicenceRegistration);
export const selectSubmitting = createSelector(selectDriversLicenceState, (state) => state.submitting);
export const selectError = createSelector(selectDriversLicenceState, (state) => state.error);
