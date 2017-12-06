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
  });

  it('should be created', inject([BoatLicenseService], (service: BoatLicenseService) => {
    expect(service).toBeTruthy();
  }));
});
