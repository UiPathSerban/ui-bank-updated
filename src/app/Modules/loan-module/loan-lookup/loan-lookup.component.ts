import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from 'src/app/shared/models/loan';
import { LoanService } from 'src/app/shared/services/loan.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loan-lookup',
  templateUrl: './loan-lookup.component.html',
  styleUrls: ['./loan-lookup.component.scss']
})
export class LoanLookupComponent implements OnInit{

  public myLoan: Loan;
  public quoteID = {
     quoteID: ""
  };

  constructor( private location: Location, private route: Router, private loanService: LoanService) { }

  ngOnInit(): void {
    
  }


  getLoanInfo(form: NgForm): any {
    console.log(form.value);
    this.quoteID = form.value;

    this.loanService.getLoanInfo(this.quoteID.quoteID).subscribe({
      next: (reply)=>{
        this.myLoan = reply;
        const isValid: boolean = true;
        this.route.navigate(['loans/detailView', isValid,
         this.quoteID.quoteID, this.myLoan.term, this.myLoan.amount, this.myLoan.rate, this.myLoan.age, this.myLoan.income, this.myLoan.email]);
      },
      error:(error)=>{
        console.log(error);
        console.log('passing false');
        this.route.navigate(['/loans/detailView', false, this.quoteID.quoteID] );
      }
    })

    

  }

  backButton() {
    this.location.back();

  }
}
