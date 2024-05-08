import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanHomeComponent } from './loan-home/loan-home.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanComponent } from './loan/loan.component';
import { LoanLookupComponent } from './loan-lookup/loan-lookup.component';
import { LoanResultComponent } from './loan-result/loan-result.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

const routes: Routes = [
  {
    path: '', component: LoanComponent, children: [
      { path: '', title: 'UiBank-Loan Home', component: LoanHomeComponent },
      { path: 'apply', title: 'UiBank-Loan Apply', component: LoanApplicationComponent },
      { path: 'lookup', title: 'UiBank-Loan Lookup', component: LoanLookupComponent },
      { path: 'detailView/:isValid/:quoteId', title: 'UiBank-loan details', component: LoanDetailsComponent },
      { path: 'detailView/:isValid/:quoteId/:term/:amount/:rate/:age/:income/:email', title: 'UiBank-Loan details', component: LoanDetailsComponent },
      { path: 'result/:loanID/:rate/:success', title: 'UiBank-Loan result', component: LoanResultComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanModuleRoutingModule { }
