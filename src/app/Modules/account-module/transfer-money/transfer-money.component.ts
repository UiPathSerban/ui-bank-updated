import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferObject } from 'src/app/shared/models/TransferObject';
import { Account } from 'src/app/shared/models/account';
import { TransferData } from 'src/app/shared/models/transfer-data';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { TransferMoneyService } from 'src/app/shared/services/transfer-money.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent {
  fromAccount: Account = new Account();
  toAccount: Account = new Account();
  amountTransferred: number;
  currentAccounts: Account[];
  transferData: TransferData;
  test: string;
  response: string;
  display: string;
  imgSrc: string = "../../../../assets/images/updated-images/refresh V1.svg";
  constructor(private route: Router, private _location: Location, private accountService: AccountsService, private transferService: TransferMoneyService) { }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe(accounts =>
        this.currentAccounts = accounts
      );
  }

  setTransferFormFields(form: NgForm) {
    console.log(form.value);
    this.transferData = form.value;

    this.amountTransferred = Number(this.transferData.transferAmount);
  }

  submitTransfer() {
    const transferObject: TransferObject = {
      type: 'transfer',
      dispute: 'ok',
      ref: '',
      description: 'transfer was made for demo purposes',
      amount: this.amountTransferred,
      TransfertoAccountId: this.toAccount.id,
      balance: this.toAccount.balance,
      accountId: this.fromAccount.id
    }

    this.transferService.transferMoney(transferObject).subscribe(reply => {
      this.response = reply;
      console.log(this.response);

      this.route.navigate(['/accounts/transfer-result']);


    });
  }

  backButton() {
    this._location.back();
  }

  setFields() {
    console.log(this.fromAccount.balance)
    console.log(this.toAccount.balance)
    console.log(this.amountTransferred)
    this.openModal();
  }

  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }

}
