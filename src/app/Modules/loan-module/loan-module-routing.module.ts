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
      { path: '', component: LoanHomeComponent },
      { path: 'apply', component: LoanApplicationComponent },
      { path: 'lookup', component: LoanLookupComponent },
      { path: 'detailView/:isValid/:quoteId', component: LoanDetailsComponent },
      { path: 'detailView/:isValid/:quoteId/:term/:amount/:rate/:age/:income/:email', component: LoanDetailsComponent },
      { path: 'result/:loanID/:rate/:success', component: LoanResultComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanModuleRoutingModule { }
