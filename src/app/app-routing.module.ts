import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './Modules/welcome-module/welcome-module.module';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./Modules/welcome-module/welcome-module.module').then(m => m.WelcomeModuleModule) },
  { path: 'login', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },
  { path: 'loans', loadChildren: () => import('./Modules/loan-module/loan-module.module').then(m => m.LoanModuleModule) },
  { path: 'accounts', loadChildren: () => import('./Modules/account-module/account-module.module').then(m => m.AccountModuleModule), canActivate: [AuthGuard] },
  { path: 'userprofile', loadChildren: () => import('./Modules/profile-module/profile-module.module').then(m => m.ProfileModuleModule), canActivate: [AuthGuard] },
  { path: 'credit-cards', loadChildren: () => import('./Modules/credit-cards-module/credit-cards-module.module').then(m => m.CreditCardsModuleModule) },
  { path: 'help', loadChildren: () => import('./Modules/help-module/help-module.module').then(m => m.HelpModuleModule) },
  { path: 'mobile-banking', loadChildren: () => import('./Modules/mobile-banking-module/mobile-banking-module.module').then(m => m.MobileBankingModuleModule) },
  { path: 'register-account', loadChildren: () => import('./Modules/register-module/register-module.module').then(m => m.RegisterModuleModule) },
  { path: 'password-request', loadChildren: () => import('./Modules/password-module/password-module.module').then(m => m.PasswordModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      allowedDomains: [],
      disallowedRoutes: []
    }
  })
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
