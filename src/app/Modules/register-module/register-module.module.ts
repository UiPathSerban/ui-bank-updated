import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModuleRoutingModule } from './register-module-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterLandingComponent } from './register-landing/register-landing.component';
import { FormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './register-success/register-success.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterLandingComponent,
    RegisterSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterModuleRoutingModule
  ]
})
export class RegisterModuleModule { }
