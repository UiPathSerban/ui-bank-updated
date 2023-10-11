import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  currentUser: User = new User();
  response: User;
  httpError: HttpErrorResponse;

  constructor(private _location: Location, private userService:UserService, private router: Router){}

  ngOnInit() {
    this.userService.test();
    this.userService.test();
    var sessionToken = localStorage.getItem("sessionToken");
    var userId = localStorage.getItem("userId") ?? '';
    console.log("profile user ID: " + userId);
    this.userService.getUserDetails(userId).subscribe({
      next: (userDetails) =>{
        this.currentUser = userDetails;
        console.log(this.currentUser);
      },
      error: (err) =>{ console.log(err); }
    });
  }

  backButton(){
    this._location.back();
  }

  updateUserInfo(form: NgForm) {
    this.userService.updateUserDetails(this.currentUser).subscribe({
      next: (res) =>{
        this.response = res;
        console.log('HTTP response', res);
        console.log('successful update');
        this.router.navigate(['userProfile']);
      },
      error: (err) =>{
        console.log('HTTP Error', err);
        this.httpError = err;
        console.log(this.httpError.error.error.message);
        alert(this.httpError.error.error.message);
        console.log('failed updating');
      },
      complete: () => console.log('Http request completed')
    });
  }

}
