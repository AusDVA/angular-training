import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BoatLicenseApplication } from './models/boat-license-application.model';

@Injectable()
export class BoatLicenseService {

  constructor(private httpClient: HttpClient) { }

  submitBoatLicense(boatLicense: BoatLicenseApplication): Observable<BoatLicenseApplication | any> {
      return this.httpClient.post<BoatLicenseApplication>(
        `${environment.apiUrl}/`, boatLicense, { headers: new HttpHeaders().set('content-type', 'application/json') }
      );
  }

}
