import { Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  Subject,
  takeUntil,
  timer,
} from 'rxjs';
import { Loan } from 'src/app/shared/models/loan';
import { LoanService } from 'src/app/shared/services/loan.service';

import {
  AgreementPopupComponent,
} from '../../welcome-module/agreement-popup/agreement-popup.component';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroyed$: Subject<null> = new Subject();
  public currentLoan: Loan;
  public response = {
    accepted: true,
    rate: 1,
    quoteid: ""

  }
  public termDates: number[] = [1, 3, 5, 10];
  constructor(
    private _location: Location,
    private route: Router,
    private loanService: LoanService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    timer(500).pipe(
      takeUntil(this.destroyed$)
    )
      .subscribe(this.agreementConfirmation)

  }


  backButton() {
    this._location.back();
  }

  submitApplication(form: NgForm): any {
    console.log(form.value);
    this.currentLoan = form.value;
    this.currentLoan.term = Number(this.currentLoan.term);

    this.loanService.submitLoan(form.value).subscribe(reply => {
      this.response = reply;
      console.log(this.response.quoteid);

      if (this.response.accepted == false) {
        this.response.rate = 0;
        this.response.quoteid = "";
      }

      this.route.navigate(['loans/result', this.response.quoteid, this.response.rate, this.response.accepted]);


    });
  }
  agreementConfirmation = () => {
    const configuration = this.getDialogConfiguration();
    this.dialog.open(
      AgreementPopupComponent,
      {
        ...configuration,
        data: { isLoanPopup: true }
      }
    ).afterClosed()
      .subscribe(
        (accepted: boolean) => { if (accepted) console.log('agreement accepted') }
      )

  }
  private getDialogConfiguration() {
    const isMobile = window.innerWidth <= 767
    const configuration = new MatDialogConfig();
    configuration.width = isMobile ? "100%" : "45%"
    configuration.maxWidth = isMobile ? "100vw" : "80vw"
    return configuration
  }
  ngOnDestroy() {
    this.destroyed$.complete();
  }

}
