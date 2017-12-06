import { ActionReducer, Action } from '@ngrx/store';
import * as BoatLicenseApplicationActions from './boat-license.actions';
import { BoatLicenseApplication } from '../models/boat-license-application.model';

export const BOATLICENSEAPPLICATION_STATE_NAME = 'boatlicenseapplications';

export interface BoatLicenseApplicationState {
    boatLicenseApplication: BoatLicenseApplication;
}

export const InitialState: BoatLicenseApplicationState = {
    boatLicenseApplication: null
};

export function boatlicenseapplicationReducer(state = InitialState, action: BoatLicenseApplicationActions.ActionTypes) {
  switch (action.type) {

    case BoatLicenseApplicationActions.LOAD_BOATLICENSEAPPLICATION:
      return {
        boatLicenseApplication: action.payload
      };

    default:
      return state;
  }
}

