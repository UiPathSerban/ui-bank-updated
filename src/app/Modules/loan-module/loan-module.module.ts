import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanModuleRoutingModule } from './loan-module-routing.module';
import { LoanHomeComponent } from './loan-home/loan-home.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { FormsModule } from '@angular/forms';
import { LoanComponent } from './loan/loan.component';
import { LoanLookupComponent } from './loan-lookup/loan-lookup.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanResultComponent } from './loan-result/loan-result.component';


@NgModule({
  declarations: [
    LoanHomeComponent,
    LoanApplicationComponent,
    LoanComponent,
    LoanLookupComponent,
    LoanDetailsComponent,
    LoanResultComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LoanModuleRoutingModule
  ]
})
export class LoanModuleModule { }
