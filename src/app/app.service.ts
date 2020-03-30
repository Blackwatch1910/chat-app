import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


// import 'rxjs/operator/catch';
// import 'rxjs/operator/do';
// import 'rxjs/operator/toPromise'; use observables over promises

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient) {


   } // end of constructor

  public getUserInforFromLocalStorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  }// end of getUserInforFromLocalStorage function

  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data));

  }// end of setUserInfoInLocalStorage function

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`, params);
    }// end of signup function

    public signinFunction(data): Observable<any> {

      const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

      return this.http.post(`${this.url}/api/v1/users/login`, params);
    }// end of signin function


}
