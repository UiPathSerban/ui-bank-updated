import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User = new User();
  userTemplate = { username: 'Username', firstName: 'First Name', lastName: 'Last Name', email: 'Email', id: ' User ID' };
  userData: Map<string, string> = new Map();
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.test();
    var userId = localStorage.getItem('userId') ?? '';
    console.log(userId);

    this.userService.getUserDetails(userId).subscribe({
      next: (userDetails) => {
        this.currentUser = userDetails;
        console.log(this.currentUser)
      },
      error: (err) => { console.log(err); },
    })
  }

  private GetUserDetails() {
    Object.keys(this.userTemplate).forEach((property: string) => {
      this.userData.set(this.userTemplate[property], this.currentUser[property]);

    })
  }
  GetUserTemplateKeys() {
    return Object.keys(this.userTemplate);
  }


}
