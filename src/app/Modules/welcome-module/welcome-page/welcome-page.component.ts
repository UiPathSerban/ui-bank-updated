import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../shared/services/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../../../shared/services/authentication-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgreementPopupComponent } from '../agreement-popup/agreement-popup.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public userLoginInfo = {
    username: "",
    password: ""
  }
  public failedLogin: boolean = false;
  public httpError: HttpErrorResponse;
  public errorMessage: string;
  public response: any;


  constructor(public authService: AuthenticationService, private loginService: LoginService, private route: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log(localStorage.getItem("sessionToken"));
    console.log('initialised the welcome page')

  }

  agreementConfirmation(form: NgForm): any {
    // const dialogSettings = new MatDialogConfig();
    const dialogSettings = this.UpdateDialogWidth();
    // dialogSettings.position = { bottom: '15%', left: '25%', top:'20%', right:'15%' };
    // dialogSettings.width = '45%'
    // dialogSettings.panelClass = 'agreementPanel'
    this.dialog.open(AgreementPopupComponent, dialogSettings)
      .afterClosed().subscribe((accepted: boolean) => {
        console.log('accepted value is ', accepted)
        if (accepted) { this.loginUser(form); }
      })
  }

  private UpdateDialogWidth() {
    const isMobileView = window.innerWidth <= 767
    const dialogSettings = new MatDialogConfig();
    dialogSettings.width = isMobileView ? "100%" : "45%"
    dialogSettings.maxWidth = isMobileView ? "100vw" : "80vw"

    return dialogSettings;
  }

  loginUser(form: NgForm): any {
    console.log(form.value);
    console.log("Logging in user" + form.value);
    this.userLoginInfo = form.value;

    this.loginService.login(this.userLoginInfo)
      .subscribe(
        res => {
          console.log('HTTP response', res);
          console.log('successful login');
          console.log('returned token', res.id);
          localStorage.setItem("sessionToken", res.id);
          localStorage.setItem("userId", res.userId);

          //this.authService.setLoggedInStatus(true);
          this.route.navigate(['accounts']);
        },
        err => {
          this.httpError = err;
          this.httpError.error.error.message;
          console.log('HTTP Error', err);
          console.log('failed login');
          if (this.httpError.status === 403) {
            console.log("accoutn locked");
          }
          this.failedLogin = true;
        },
        () => console.log('HTTP request completed.'));
  }



  //login(form: NgForm) {
  //  let credentials = JSON.stringify(form.value);
  //  this.http.post("http://localhost:5000/api/auth/login", credentials, {
  //    headers: new HttpHeaders({
  //      "Content-Type": "application/json"
  //    })
  //  }).subscribe(response => {
  //    let token = (<any>response).token;
  //    localStorage.setItem("jwt", token);
  //    this.invalidLogin = false;
  //    this.router.navigate(["/"]);
  //  }, err => {
  //    this.invalidLogin = true;
  //  });
  //}

}
