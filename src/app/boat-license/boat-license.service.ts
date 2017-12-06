import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BoatLicense } from './models/boat-license-application.model';

@Injectable()
export class BoatLicenseService {

  constructor(private httpClient: HttpClient) { }


  submitBoatLicense(boatLicense: BoatLicense): Observable<BoatLicense | any> {
      return this.httpClient.post<BoatLicense>(
        `${environment.apiUrl}/`, boatLicense, { headers: new HttpHeaders().set('content-type', 'application/json') }
      );
  }

}
