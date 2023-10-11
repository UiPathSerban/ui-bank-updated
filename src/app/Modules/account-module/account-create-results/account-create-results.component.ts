import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-create-results',
  templateUrl: './account-create-results.component.html',
  styleUrls: ['./account-create-results.component.scss']
})
export class AccountCreateResultsComponent implements OnInit{
  public accountId: string;
  public friendlyName: string;
  public sub: any;

  constructor(private _location: Location, private route: ActivatedRoute){}

  ngOnInit(){
    this.sub = this.route.params.subscribe({
      next: (params)=>{
        this.accountId = params['accountId'];
        this.friendlyName = params['friendlyName'];
      },
      error: (e) =>{console.warn(e)}
    });
  }

  backButton(){
    this._location.back();
  }


}
