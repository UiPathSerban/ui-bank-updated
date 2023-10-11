import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileBankingComponent } from './mobile-banking/mobile-banking.component';

const routes: Routes = [
  {path: '', component: MobileBankingComponent, children:[]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileBankingModuleRoutingModule { }
