import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BoatLicenseApplication } from './models/boat-license-application.model';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError, delay } from 'rxjs/operators';

@Injectable()
export class BoatLicenseService {

  constructor(private httpClient: HttpClient) { }

  getBoatLicense(applicationID: number): Observable<BoatLicenseApplication> {
    return this.httpClient.get<BoatLicenseApplication>(
      `${environment.apiUrl}/profiles/${applicationID}`
    ).pipe(catchError(this.errorHandler));
  }

  submitBoatLicense(boatLicense: BoatLicenseApplication): Observable<BoatLicenseApplication | any> {
      return this.httpClient.post<BoatLicenseApplication>(
        `${environment.apiUrl}/`, boatLicense, { headers: new HttpHeaders().set('content-type', 'application/json') }
      )
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error): Observable<BoatLicenseApplication> {
    console.error('USER ERROR:', error);
    return new EmptyObservable();
  }

}
