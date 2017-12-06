import { Injectable } from '@angular/core';
import { DriversLicenceRegistration } from './models/drivers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError} from 'rxjs/operators';

@Injectable()
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  getDriverRegoInfo(userId: number): Observable<DriversLicenceRegistration> {
    return this.httpClient.get<DriversLicenceRegistration>(`${environment.apiUrl}/profiles/${userId}`);
  }

  private errorHandler(error: Error): Observable<DriversLicenceRegistration> {
    console.error('DRIVER ERROR:', error);
    return new EmptyObservable();
  }

  saveDriver(driver: DriversLicenceRegistration): Observable<DriversLicenceRegistration | any> {
        if (!driver.ID) {
          return this.httpClient.post<DriversLicenceRegistration>(
            `${environment.apiUrl}/profiles`, driver, { headers: new HttpHeaders().set('content-type', 'application/json') }
          )
          .pipe(catchError(this.errorHandler));
         } else {
          return this.httpClient.put<void>(
            `${environment.apiUrl}/profiles/${driver.ID}`, driver, { headers: new HttpHeaders().set('content-type', 'application/json') }
          )
          .pipe(catchError(this.errorHandler));
        }
      }
}
