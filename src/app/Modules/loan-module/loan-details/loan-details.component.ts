import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/shared/models/loan';
import { LoanService } from 'src/app/shared/services/loan.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  public amount: number;
  public rate: number;
  public income: number;
  public quoteID: string;
  public age: number;
  public term: number;
  private sub: any;
  public myLoan: Loan;
  public loadPage: string = 'yo';
  public errorMessage: string;
  public validID: string ='';
  public giant: boolean = true;
  public isValid: boolean;
  public email: string;

  constructor(private _location: Location, private route: ActivatedRoute, private loanService: LoanService){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe({
      next: (params)=>{
        console.log(params);
        this.quoteID = params['quoteId'];
        this.validID = params['isValid'];
        this.term = params['term'];
        this.amount = params['amount'];
        this.rate = params['rate'];
        this.age = params['age'];
        this.income = params['income'];
        this.email = params['email'];
      }
    });
    if(this.validID =='true') this.isValid = true;
      else
      this.isValid = false;

  }

  backButton(){
    this._location.back();
  }

}
