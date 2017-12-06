import { Action } from '@ngrx/store';
import { DriversLicenceRegistration } from '../models/drivers';

export const SUBMIT = '[Drivers] Sumbit';
export const SUBMIT_ERROR = '[Drivers] SumbitError';
export const SUBMIT_SUCCESS = '[Drivers] SumbitSUCCESS';
export const LOAD_DRIVER_VIEW_DATA = '[Drivers] LoadDriverViewData';

export class SubmitAction implements Action {
    readonly type = SUBMIT;
    constructor(public payload: DriversLicenceRegistration) { }
}

export class SubmitErrorAction implements Action {
    readonly type = SUBMIT_ERROR;
    constructor(public payload: string) { }
}

export class SubmitSuccessAction implements Action {
    readonly type = SUBMIT_SUCCESS;
    constructor(public payload: null) { }
}

export class LoadDriverViewDataAction implements Action {
    readonly type = LOAD_DRIVER_VIEW_DATA;
    constructor(public payload: DriversLicenceRegistration) { }
}



export type ActionTypes = SubmitAction
                          |SubmitErrorAction
                          |SubmitSuccessAction
                          |LoadDriverViewDataAction;
