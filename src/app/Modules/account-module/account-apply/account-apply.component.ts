import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/shared/models/account';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { Transaction } from 'src/app/shared/models/transaction';

@Component({
  selector: 'app-account-apply',
  templateUrl: './account-apply.component.html',
  styleUrls: ['./account-apply.component.scss']
})
export class AccountApplyComponent implements OnInit {
  public accountTypes: string[] = ['checking', 'savings'];
  public sexType: string[] = ['male', 'female'];
  public employmentStatuses: string[] = ['Full-time', 'Part-time', 'Unemployed'];
  public maritalStatuses: string[] = ['Single', "Married", "Divorced", 'Widowed'];
  public types: string[] = ['checking', 'savings'];
  public newAccount: Account = new Account();
  public formData = {
    typeOfAccount: '',
    accountNickname: ''
  }
  public userId: string;
  public response: Account;
  public httpError: HttpErrorResponse;
  public newTransaction: Transaction = new Transaction();
  public today: Date = new Date();
  public todaysDate: string;

  constructor(private _location: Location, private route: Router, private actitvatedRoute: ActivatedRoute, private accountService: AccountsService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') ?? '';
  }

  backButton() {
    this._location.back();
  }

  registerNewAccount(form: NgForm) {
    console.log(form.value);
    console.log('Creating new account');
    this.formData = form.value;
    console.log(this.formData.accountNickname);
    this.newAccount.friendlyName = this.formData.accountNickname;
    this.newAccount.type = this.formData.typeOfAccount;
    this.newAccount.userId = this.userId;
    this.newAccount.balance = 100;

    const randomAccount = Number(Math.random().toString(8).slice(-8));
    console.log('this is random:' + randomAccount);
    this.newAccount.accountNumber = randomAccount;

    this.accountService.createNewAccount(this.newAccount).subscribe({
      next: (res) => {
        this.response = res;
        console.log('HTTP response', res);
        console.log('Successfull account creation.');

        var dd = String(this.today.getDate()).padStart(2, '0');
        var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.today.getFullYear();

        // this.todaysDate = mm + '/' + dd + '/' + yyyy;

        // this.newTransaction.amount = 100;
        // this.newTransaction.accountId = this.response.id;
        // this.newTransaction.description = "Initial Deposit - Thanks For Banking With UiBank";
        // this.newTransaction.date = this.todaysDate;
        // this.newTransaction.balance = this.newAccount.balance;
        // this.newTransaction.type = "credit";

        this.route.navigate(['accounts/account-create-results/', this.response.accountNumber, this.response.friendlyName]);
      },
      error: (err) => {
        console.log('HTTP Error', err);
        this.httpError = err;
        console.log(this.httpError.error.error.message);
        console.log('failed application');
        this.route.navigate(['accounts/account-create-results/', '0', '0']);
      },
      complete: () => console.log('Http request completed')
    });

  }

}
