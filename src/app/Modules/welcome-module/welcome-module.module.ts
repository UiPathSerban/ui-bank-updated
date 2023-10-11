import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication-service.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeModuleRoutingModule } from './welcome-module-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgreementPopupComponent } from './agreement-popup/agreement-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    WelcomePageComponent,
    AgreementPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    WelcomeModuleRoutingModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ["example.com"],
    //     disallowedRoutes: ["http://example.com/examplebadroute/"],
    //   },
    // }),
  ],
  providers: [
    AuthenticationService,
    LoginService,

  ]
})
export class WelcomeModuleModule { }
