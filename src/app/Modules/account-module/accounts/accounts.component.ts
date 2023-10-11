import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Account } from 'src/app/shared/models/account';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  currentAccounts: Account[];
  accountID: string = "123123";

  constructor(private _location: Location, private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts()
      .subscribe(accounts =>
        this.currentAccounts = accounts
      );
  }

  trimID(id: string) {
    const newID = id.substring(id.length - 4, id.length);
    return newID;
  }

  backButton() {
    this._location.back();
  }
}
