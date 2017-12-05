import { DriversLicenceRegistration } from '../models/drivers';
import * as DriversActions from './drivers.actions';
export const DRIVERS_STATE_NAME = 'drivers';

export interface DriversLicenceRegistrationState {
    driversLicenceRegistration: DriversLicenceRegistration;
    submitting: boolean;
    error: string;
}

export const InitialState: DriversLicenceRegistrationState = {
    driversLicenceRegistration: null,
    submitting: false,
    error: null
};

export function driversReducer(state = InitialState, action: DriversActions.ActionTypes) {
    switch (action.type) {
        default:
            return state;
    }
}
