import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardsModuleRoutingModule } from './credit-cards-module-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardsApplyComponent } from './credit-cards-apply/credit-cards-apply.component';


@NgModule({
  declarations: [
    CreditCardComponent,
    CreditCardsComponent,
    CreditCardsApplyComponent
  ],
  imports: [
    CommonModule,
    CreditCardsModuleRoutingModule
  ]
})
export class CreditCardsModuleModule { }
