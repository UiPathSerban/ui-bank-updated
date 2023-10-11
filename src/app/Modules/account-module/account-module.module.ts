import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModuleRoutingModule } from './account-module-routing.module';
import { AccountComponent } from './account/account.component';
import { AccountApplyComponent } from './account-apply/account-apply.component';
import { FormsModule } from '@angular/forms';
import { AccountCreateResultsComponent } from './account-create-results/account-create-results.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MaterialDesignModule } from 'src/material-design/material-design/material-design.module';
import { AccountsComponent } from './accounts/accounts.component';
import { DisputeTransactionComponent } from './dispute-transaction/dispute-transaction.component';
import { DisputeAccountViewComponent } from './dispute-account-view/dispute-account-view.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { TransferResultComponent } from './transfer-result/transfer-result.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountApplyComponent,
    AccountCreateResultsComponent,
    AccountDetailsComponent,
    AccountsComponent,
    DisputeTransactionComponent,
    DisputeAccountViewComponent,
    TransferMoneyComponent,
    TransferResultComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountModuleRoutingModule,
    MaterialDesignModule
  ]
})
export class AccountModuleModule { }
