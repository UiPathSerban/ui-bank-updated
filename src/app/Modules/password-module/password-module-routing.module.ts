import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetConfrimationComponent } from './password-reset-confrimation/password-reset-confrimation.component';
import { PasswordLandingComponent } from './password-landing/password-landing.component';
import { PasswordRequestComponent } from './password-request/password-request.component';
import { PasswordRequestConfirmationComponent } from './password-request-confirmation/password-request-confirmation.component';

const routes: Routes = [
  {path:'', component: PasswordLandingComponent, children:[
    {path:'', component:PasswordRequestComponent},
    {path:'confirmation/:valid', component:PasswordRequestConfirmationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordModuleRoutingModule { }
