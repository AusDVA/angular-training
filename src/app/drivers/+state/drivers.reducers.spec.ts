import { DriversLicenceRegistration } from '../models/driversLicenceRegistration';
import { driversReducer, DriversLicenceRegistrationState } from './drivers.reducers';
import { SubmitAction } from './drivers.actions';

describe('Reducers: Drivers', () => {
    const dl: DriversLicenceRegistration = {
        firstName: 'bob',
        lastName: 'smith',
        gender: null,
        dateOfBirth: new Date(),
        type: 'yes',
        address: 'here',
        medicalConditions: false,
        lengthOfLicenceYears: '4',
        drivingOffences: true
    };

    it('Submit action should set submitting to true and clear error', () => {

        const beforeState: DriversLicenceRegistrationState = {
            driversLicenceRegistration: dl,
            submitting: false,
            error: 'bad stuff',
        };

        const afterState: DriversLicenceRegistrationState
            = driversReducer(beforeState, new SubmitAction(beforeState.driversLicenceRegistration));

        expect(afterState.submitting).toBe(true);
        expect(afterState.error).toBe(null);
        expect(afterState.driversLicenceRegistration).toEqual(dl);

    });

});
