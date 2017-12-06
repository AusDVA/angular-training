import { Injectable } from '@angular/core';
import { DriversLicenceRegistration } from './models/driversLicenceRegistration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError} from 'rxjs/operators';

@Injectable()
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  getDriverRegoInfo(userId: number): Observable<DriversLicenceRegistration> {
    return this.httpClient.get<DriversLicenceRegistration>(`${environment.apiUrl}/licences/driving/${userId}`);
  }

  private errorHandler(error: Error): Observable<DriversLicenceRegistration> {
    console.error('DRIVER ERROR:', error);
    return new EmptyObservable();
  }

  saveDriver(driver: DriversLicenceRegistration): Observable<DriversLicenceRegistration | any> {
        if (!driver.ID) {
          return this.httpClient.post<DriversLicenceRegistration>(
            `${environment.apiUrl}/licences/driving`, driver, { headers: new HttpHeaders().set('content-type', 'application/json') }
          );
          // .pipe(catchError(this.errorHandler));
         } else {
          return this.httpClient.put<void>(
            `${environment.apiUrl}/licences/driving/${driver.ID}`,
              driver, { headers: new HttpHeaders().set('content-type', 'application/json') }
          );
          // .pipe(catchError(this.errorHandler));
        }
      }

  getAllDriverRegoInfo(): Observable<DriversLicenceRegistration> {
    return this.httpClient.get<DriversLicenceRegistration>(`${environment.apiUrl}/licences/driving/`);
  }
}
