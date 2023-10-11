import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded: boolean = false;
  loggedIn: boolean = false;

  constructor(private router: Router, public authService: AuthenticationService){}

  logoutUser(){
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userId');

    this.loggedIn = false;
    this.router.navigate(["/"]);
  }
  collapse(){
    this.isExpanded = false;
  }
  toggle(){
    this.isExpanded = !this.isExpanded;
  }
}
