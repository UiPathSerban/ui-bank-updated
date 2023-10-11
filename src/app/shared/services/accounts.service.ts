import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Account } from '../models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  currentAccounts: Observable<Account[]>;
  // accountsURLPrefix: string = "https://uibank-api.azurewebsites.net/api/accounts";
  // transactionsURLPrefix: string = "https://uibank-api.azurewebsites.net/api/transactions";
  accountsURLPrefix: string = environment.uiBankApiUrl + "/accounts";
  transactionsURLPrefix: string = environment.uiBankApiUrl + "/transactions";
  accountURLSuffix: string = "/accounts";
  handleError;
  customers: any;




  constructor(private http: HttpClient) { }


  getAccounts(): Observable<Account[]> {
    const filterString = `?filter[where][userId]=${localStorage.getItem('userId')}`;
    return this.http.get<Account[]>(this.accountsURLPrefix + filterString,
      {
        headers: new HttpHeaders({
          'Authorization': localStorage.getItem('sessionToken') ?? ""
        })
      });
  }

  createNewAccount(account: Account): any {
    return this.http.post(this.accountsURLPrefix, account, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessionToken') ?? ""
      })
    }).pipe(map((response: any) => {
      return response;
    }))
  }

  createInitialTransaction(transaction: Transaction): any {
    return this.http.post(this.transactionsURLPrefix, transaction, {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('sessionToken') ?? ''
      })
    }).pipe(map((response: any) => {
      return response;
    }));
  }

  getTransactions(accountId: string): Observable<Transaction[]> {
    const filterString = `?filter[where][accountId]=${accountId}`;
    return this.http.get<Transaction[]>(this.transactionsURLPrefix + filterString, {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("sessionToken") ?? ''
      })
    });
  }

  getDisputedTransactions(accountId: string): Observable<Transaction[]> {
    const filterstring = `?filter[where][accountId]=${accountId}`;
    return this.http.get<Transaction[]>(this.transactionsURLPrefix + filterstring, {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('sessionToken') ?? ''
      })
    });
  }

  getResolvedTransactions(): Observable<Transaction[]> {
    const filterString = "?filter[where][or][0][dispute] = resolved& filter[where][or][1][distpure]=resolved-refunded";
    return this.http.get<Transaction[]>(this.accountURLSuffix + filterString, {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('sessionToken') ?? ''
      })
    });
  }

  disputeTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.transactionsURLPrefix}/${transaction.id}`, transaction, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessionToken') ?? ''
      })
    })
  }
}
