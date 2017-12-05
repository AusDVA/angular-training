import { ActionReducer, Action } from '@ngrx/store';
import * as BoatLicenseApplicationActions from './boat-license.actions';
import { BoatLicenseApplication } from '../models/boat-license-application.model';

export const BOATLICENSEAPPLICATION_STATE_NAME = 'boatlicenseapplications';

export interface BoatLicenseApplicationState {
    boatLicenseApplication: BoatLicenseApplication;
    loading: boolean;
    saving: boolean;
    error: string;
}

export const InitialState: BoatLicenseApplicationState = {
    boatLicenseApplication: null,
    loading: false,
    saving: false,
    error: null
};

export function boatlicenseapplicationReducer(state = InitialState, action: BoatLicenseApplicationActions.ActionTypes) {
  switch (action.type) {

    case BoatLicenseApplicationActions.LOAD_BOATLICENSEAPPLICATION:
      return {
        boatLicenseApplication: action.payload,
        loading: false,
        saving: false,
        error: null
      };

    case BoatLicenseApplicationActions.GET_BOATLICENSEAPPLICATION: {
        return {
          ...state,
          ...{
            loading: true,
            saving: false,
            error: null
          }
        };
      }

      case BoatLicenseApplicationActions.SAVE_BOATLICENSEAPPLICATION: {
        return {
          ...state,
          ...{
            loading: false,
            saving: true,
            error: null
          }
        };
      }

      case BoatLicenseApplicationActions.ERROR_BOATLICENSEAPPLICATION: {
        return {
            user: {
              userId: null
            },
            loading: false,
            saving: false,
            error: action.payload
        };
      }

    default:
      return state;
  }
}

