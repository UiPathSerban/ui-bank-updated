import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpModuleRoutingModule } from './help-module-routing.module';
import { HelpLandingComponent } from './help-landing/help-landing.component';
import { HelpComponent } from './help/help.component';
import { HelpReceivedComponent } from './help-received/help-received.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HelpLandingComponent,
    HelpComponent,
    HelpReceivedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HelpModuleRoutingModule
  ]
})
export class HelpModuleModule { }
