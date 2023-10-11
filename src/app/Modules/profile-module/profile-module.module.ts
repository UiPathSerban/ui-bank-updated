import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileLandingComponent } from './profile-landing/profile-landing.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileLandingComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileModuleRoutingModule
  ]
})
export class ProfileModuleModule { }
