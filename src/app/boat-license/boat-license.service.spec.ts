import { TestBed, inject } from '@angular/core/testing';

import { BoatLicenseService } from './boat-license.service';

describe('BoatLicenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoatLicenseService]
    });
  });

  it('should be created', inject([BoatLicenseService], (service: BoatLicenseService) => {
    expect(service).toBeTruthy();
  }));
});
