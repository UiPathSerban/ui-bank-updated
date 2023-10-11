import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-result',
  templateUrl: './loan-result.component.html',
  styleUrls: ['./loan-result.component.scss']
})
export class LoanResultComponent implements OnInit {
  public loanID: string;
  public rate: number;
  public accepted: boolean;
  private sub: any;
  public acceptedString: string;

  constructor(private _location: Location, private route: ActivatedRoute){}

  ngOnInit(){
    this.sub = this.route.params.subscribe({
      next: (params)=> {
        this.loanID = params['loanID'];
        this.rate = +params['rate'];
        this.accepted = params['success'];
      }
    });
  }

  backButton(){
    this._location.back();
  }

}
