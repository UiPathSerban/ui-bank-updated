import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetConfrimationComponent } from './password-reset-confrimation/password-reset-confrimation.component';
import { PasswordLandingComponent } from './password-landing/password-landing.component';
import { PasswordRequestComponent } from './password-request/password-request.component';
import { PasswordRequestConfirmationComponent } from './password-request-confirmation/password-request-confirmation.component';

const routes: Routes = [
  {
    path: '', title: 'UiBank-Password change', component: PasswordLandingComponent, children: [
      { path: '', title: 'UiBank-Password request', component: PasswordRequestComponent },
      { path: 'confirmation/:valid', title: 'UiBank-Password confirmation', component: PasswordRequestConfirmationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordModuleRoutingModule { }
