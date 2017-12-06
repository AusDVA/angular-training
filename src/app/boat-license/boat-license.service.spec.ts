import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { BoatLicenseService } from './boat-license.service';

describe('BoatLicenseService', () => {

  let boatLicenseService: BoatLicenseService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoatLicenseService]
    });

    boatLicenseService = TestBed.get(BoatLicenseService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BoatLicenseService], (service: BoatLicenseService) => {
    expect(service).toBeTruthy();
  }));

  it('submitBoatLicense: should return an EmptyObservable if request failed', done => {
    const fakeBoatLicense = {} as any;

    boatLicenseService.submitBoatLicense(fakeBoatLicense).subscribe(boatLicense => {
        expect(true).toBeFalsy();
      }, error => {}, () => {
        done();
      });

    const saveRequest = httpMock.expectOne(`${environment.apiUrl}/boat-license-application`);
    saveRequest.error(new ErrorEvent('ERROR_SUBMITTING_BOAT_LICENSE_APP_FORM'));

    httpMock.verify();
  });

  it('submitBoatLicense: should return a boat license if application request succeeds', done => {
    const fakeBoatLicense = {} as any;
    const expectedResponse = { applicationID: 1 };

    boatLicenseService.submitBoatLicense(fakeBoatLicense).subscribe(boatLicense => {
      expect(boatLicense).toBe(expectedResponse);
      done();
    });

    const saveRequest = httpMock.expectOne(`${environment.apiUrl}/boat-license-application`);
    saveRequest.flush(expectedResponse);

    httpMock.verify();
  });

});
