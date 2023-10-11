import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileBankingModuleRoutingModule } from './mobile-banking-module-routing.module';
import { MobileBankingComponent } from './mobile-banking/mobile-banking.component';


@NgModule({
  declarations: [
    MobileBankingComponent
  ],
  imports: [
    CommonModule,
    MobileBankingModuleRoutingModule
  ]
})
export class MobileBankingModuleModule { }
