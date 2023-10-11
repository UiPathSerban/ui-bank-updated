import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/app/shared/services/authentication-service.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLoginInfo = {
    username: '',
    password: '',
  }
  public failedLogin: boolean = false;
  public httpError: HttpErrorResponse;
  public errorMessage: string;
  public response: any;

  constructor(public authService: AuthenticationService,
    private http: HttpClient, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {

  }

  loginUser(form: NgForm): any {
    this.userLoginInfo = form.value;

    this.loginService.login(this.userLoginInfo).subscribe(
      res => {
        console.log('HTTP response', res);
        console.log('Successful login');
        console.log('returned token', res.id);
        localStorage.setItem('sessionToken', res.id);
        localStorage.setItem("userId", res.userId);
        this.route.navigate(['accounts']);
      },
      err => {
        this.httpError = err;
        // this.httpError.error.error.message;
        console.log('HTTP Error', err);
        console.log('failed login');
        if (this.httpError.status === 403) {
          console.log('account locked');
        }
        this.failedLogin = true;
      },
      () => console.log('HTTP request completed')
    );
  }

}
