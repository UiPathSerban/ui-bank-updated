import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../models/account';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  currentAccounts: Observable<Account[]>;
  // loanURL: string = "https://uibank-api.azurewebsites.net/api/users/";
  loanURL: string = environment.uiBankApiUrl + "/users/";
  quotesSuffix: string = "users/";
  getQuoteSuffix: string = "quotes/";
  response: string;

  constructor(private http: HttpClient) { }


  registerNewUser(user: User): any {
    return this.http.post(this.loanURL, user).pipe(map((response: any) => {
      return response;
    }))

  }

  handleError(error: HttpErrorResponse) {
    console.log("There was an HttpError");
  }

}



