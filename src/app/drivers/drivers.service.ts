import { Injectable } from '@angular/core';
import { Driver } from './models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError} from 'rxjs/operators';

@Injectable()
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  getDriverRegoInfo(userId: number): Observable<Driver> {
    return this.httpClient.get<Driver>(`${environment.apiUrl}/profiles/${userId}`);
  }

  private errorHandler(error: Error): Observable<Driver> {
    console.error('DRIVER ERROR:', error);
    return new EmptyObservable();
  }

  saveDriver(driver: Driver): Observable<Driver | any> {
        if (!driver.ID) {
          return this.httpClient.post<Driver>(
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
