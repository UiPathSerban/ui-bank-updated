import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userURL: string = "https://uibank-api.azurewebsites.net/api/users/";
  // passwordResetURL: string = "https://uibank-api.azurewebsites.net/api/users/reset/";
  // newPasswordResetURL: string = "https://uibank-api.azurewebsites.net/api/users/reset-password/";
  userURL: string = environment.uiBankApiUrl + "/users/";
  passwordResetURL: string = environment.uiBankApiUrl + "/users/reset/";
  newPasswordResetURL: string = environment.uiBankApiUrl + "/users/reset-password/";
  userDetailSuffix: string = "";

  constructor(private http: HttpClient) { }

  getUserDetails(userID: string): Observable<User> {
    console.log('FinalUrl: ', this.userURL + userID);
    return this.http.get<User>(this.userURL + userID,
      {
        headers: new HttpHeaders({
          "Authorization": localStorage.getItem("sessionToken") || ''
        })
      }
    );
  }

  updateUserDetails(user: User): Observable<User> {

    return this.http.post<User>(this.userURL + this.userDetailSuffix, user,
      {
        headers: new HttpHeaders({
          "Authorization": JSON.parse(localStorage.getItem("sessionToken") || '')
        })
      })
  }


  resetPassword(email: any): any {
    console.log("reseting password...");
    console.log("in service here is email: " + email);
    return this.http.post(this.passwordResetURL, email).pipe(map((response: any) => {
      return response;
    }));
  }

  resetNewPassword(newPassword: any, resetToken: string): any {
    console.log("setting new password...");
    console.log("in service here is password: " + newPassword);
    console.log("here is the reset token: " + resetToken)
    return this.http.post<User>(this.newPasswordResetURL, newPassword,
      {
        headers: new HttpHeaders({
          "Authorization": resetToken
        })
      })
  }


  test() {
    console.log("HELOOOOOOOOOOOOOOOOOOOOOOO");
  }
}
