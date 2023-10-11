import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordModuleRoutingModule } from './password-module-routing.module';
import { PasswordRequestComponent } from './password-request/password-request.component';
import { PasswordRequestConfirmationComponent } from './password-request-confirmation/password-request-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetConfrimationComponent } from './password-reset-confrimation/password-reset-confrimation.component';
import { FormsModule } from '@angular/forms';
import { PasswordLandingComponent } from './password-landing/password-landing.component';


@NgModule({
  declarations: [
    PasswordRequestComponent,
    PasswordRequestConfirmationComponent,
    PasswordResetComponent,
    PasswordResetConfrimationComponent,
    PasswordLandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PasswordModuleRoutingModule
  ]
})
export class PasswordModuleModule { }
