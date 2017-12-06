import { Action } from '@ngrx/store';
import {BoatLicenseApplication} from "../models/boat-license-application.model";

export const GET_BOATLICENSEAPPLICATION = '[BoatLicenseApplication] GET';
export const SAVE_BOATLICENSEAPPLICATION = '[BoatLicenseApplication] SAVE';


export class GetAction implements Action {
  readonly type = GET_BOATLICENSEAPPLICATION;
  constructor(public payload: number) { }
}

export class SaveAction implements Action {
  readonly type = SAVE_BOATLICENSEAPPLICATION;
  constructor(public payload: BoatLicenseApplication) { }
}


export type ActionTypes
  = GetAction
  | SaveAction

  ;
