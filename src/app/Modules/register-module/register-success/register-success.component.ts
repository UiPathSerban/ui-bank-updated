import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/shared/services/loan.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  public sub: any;
  public username: string;

  constructor(private _location: Location, private route: ActivatedRoute, private loanService: LoanService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];

    }, err => { console.log(err); })
  }

  backButton() {
    this._location.back();
  }
}
