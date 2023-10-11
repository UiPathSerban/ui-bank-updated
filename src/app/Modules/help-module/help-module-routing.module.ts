import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpLandingComponent } from './help-landing/help-landing.component';
import { HelpComponent } from './help/help.component';
import { HelpReceivedComponent } from './help-received/help-received.component';

const routes: Routes = [
  {path: '', component: HelpLandingComponent, children:[
    {path: '', component: HelpComponent},
    {path:'confirmation', component: HelpReceivedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpModuleRoutingModule { }
