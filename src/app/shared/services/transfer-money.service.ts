import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransferObject } from '../models/TransferObject';
import { Account } from '../models/account';

@Injectable({
    providedIn: 'root'
})
export class TransferMoneyService {
    currentAccounts: Observable<Account[]>;
    transferURL: string = "https://uibank-api.azurewebsites.net/api/transactions";
    response: string;

    constructor(private http: HttpClient) { }

    transferMoney(transferObject: TransferObject): any {
        return this.http.post(this.transferURL, transferObject,
            {
                headers: new HttpHeaders({
                    "Authorization": localStorage.getItem("sessionToken") ?? ''
                })
            }
        ).pipe(map((response: any) => {
            return response;
        })
        )
    }

}
