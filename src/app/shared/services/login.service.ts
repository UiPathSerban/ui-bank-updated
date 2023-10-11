import { Injectable } from '@angular/core';
import { Loan } from '../../shared/models/loan';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentAccounts: Observable<Account[]>;
  // loginURL: string = "https://uibank-api.azurewebsites.net/api/users/login";
  loginURL: string = environment.uiBankApiUrl + "/users/login";
  quotesSuffix: string = "users/";
  getQuoteSuffix: string = "quotes/";
  response: string;
  invalidLogin: boolean = false;
  loggingInUser: User;

  constructor(private http: HttpClient, private router: Router) { }


  loginUser(user: User): any {

    return this.http.post(this.loginURL, user).pipe(map((response: any) => {
      console.log(response.status)

      return response;
    }));

  }

  login(userData: any): any {
    console.log("in login service");
    let credentials = JSON.stringify(userData.value);
    this.loggingInUser = userData;
    console.log(this.loggingInUser);
    return this.http.post(this.loginURL, userData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })

  }

  loginWithToken(user: any): any {
    console.log("validating user login...");
    return this.http.post(this.loginURL, user).pipe(map((response: any) => {
      console.log(response.status)

      return response;
    }));
  }


  logOut() {
    localStorage.removeItem("sessionToken");
  }

  handleError(error: HttpErrorResponse) {

    console.log("There was an HttpError");
  }

}



