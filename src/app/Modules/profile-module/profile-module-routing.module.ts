import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLandingComponent } from './profile-landing/profile-landing.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '', component: ProfileLandingComponent, children: [
      { path: '', title: 'UiBank-Profile', component: ProfileComponent },
      { path: 'edit-profile', title: 'UiBank-Edit profile', component: EditProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileModuleRoutingModule { }
