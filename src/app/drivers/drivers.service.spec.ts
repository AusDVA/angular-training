import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../environments/environment';
import { DriversService } from './drivers.service';

describe('Service: Drivers', () => {

    let driversService: DriversService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                DriversService
            ]
        });

        driversService = TestBed.get(DriversService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('saveDriver: should return an EmptyObservable if request failed', (done) => {
        const fakeUser = {} as any;

        driversService.saveDriver(fakeUser)
            .subscribe(user => {
                expect(true).toBeFalsy();

            }, error => {

            }, () => {
                done();
            });

        const saveRequest = httpMock.expectOne(`${environment.apiUrl}/profiles`);
        saveRequest.error(new ErrorEvent('ERROR_SAVING_DRIVERS'));

        httpMock.verify();
    });

    it('saveDriver: should return a driver if driver registration request succeeds', (done) => {
        const fakeUser = {} as any;
        const expectedResponse = { ID: 1 };

        driversService.saveDriver(fakeUser)
            .subscribe(user => {
                expect(user).toBe(expectedResponse);
                done();
            });

        const saveRequest = httpMock.expectOne(`${environment.apiUrl}/profiles`);
        saveRequest.flush(expectedResponse);

        httpMock.verify();
    });
});
