import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Account } from "../models/account";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Loan } from "../models/loan";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  currentAccounts: Observable<Account[]>;
  // loanURL: string = "https://uibank-api.azurewebsites.net/api";
  loanURL: string = environment.uiBankApiUrl;
  quotesSuffix: string = "/quotes/newquote";
  getQuoteSuffix: string = "/quotes/";
  response: string;

  constructor(private http: HttpClient) {

  }

  submitLoan(loan: Loan): any {
    return this.http.post(this.loanURL + this.quotesSuffix, loan).pipe(map(response => { return response; })
    )
  }
  // to get the loan informatoin from ID
  getLoanInfo(loanID: string): Observable<Loan> {
    console.log(loanID);
    console.log(this.loanURL + this.getQuoteSuffix + loanID);

    return this.http.get(this.loanURL + this.getQuoteSuffix + loanID);
  }

  handleError(error: HttpErrorResponse) {
    console.log("There was an HttpError");
  }
}