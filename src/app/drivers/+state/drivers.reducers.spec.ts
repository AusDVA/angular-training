import { DriversLicenceRegistration } from '../models/drivers';
import { driversReducer, DriversLicenceRegistrationState } from './drivers.reducers';
import { SubmitAction } from './drivers.actions';

describe('Reducers: Drivers', () => {
    const dl: DriversLicenceRegistration = {
        FirstName: 'bob',
        LastName: 'smith',
        Gender: null,
        DOB: new Date(),
        TypeOfLicence: 'yes',
        Address: 'here',
        MedicalConditions: false,
        LengthOfLicence: '4',
        DrivingOffences: true
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
