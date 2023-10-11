import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public userLoggedIn: boolean =false;

  constructor() { }
  getLoggedInStatus(): boolean {
    if(localStorage.getItem('userId')=== null){
      return false;
    }else{
      return true;
    }
  }

  setLoggedInStatus(status: boolean){
    this.userLoggedIn = status
  }

  isUserAuthenticated(){
    let token: string | null = localStorage.getItem('sessionToken');
    console.log(token);
    if(token== '' || token == undefined){
      console.log('Invalid user for this page');
      this.userLoggedIn = true;
      return false;
    }else{
      console.log('Valid user for this page');
      this.userLoggedIn = false;
      return true;
    }
  }
}

