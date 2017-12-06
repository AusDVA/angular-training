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
        case DriversActions.SUBMIT:
        return {
            ...state,
            ...{
                submitting: true,
                error: null
            }
        };

        case DriversActions.SUBMIT_ERROR:
        return {
            ...state,
            ...{
                submitting: false,
                error: action.payload
            }
        };

        case DriversActions.SUBMIT_SUCCESS:
        return {
            ...state,
            ...{
                submitting: false,
                error: null
            }
        };

        case DriversActions.LOAD_DRIVER_VIEW_DATA:
        return {
            driversLicenceRegistration: action.payload,
            submitting: false,
            error: null
        };

        default:
            return state;
    }
}
