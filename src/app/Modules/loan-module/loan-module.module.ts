import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import {
  LoanApplicationComponent,
} from './loan-application/loan-application.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanHomeComponent } from './loan-home/loan-home.component';
import { LoanLookupComponent } from './loan-lookup/loan-lookup.component';
import { LoanModuleRoutingModule } from './loan-module-routing.module';
import { LoanResultComponent } from './loan-result/loan-result.component';
import { LoanComponent } from './loan/loan.component';

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
    LoanModuleRoutingModule,
    MatDialogModule
  ]
})
export class LoanModuleModule { }
