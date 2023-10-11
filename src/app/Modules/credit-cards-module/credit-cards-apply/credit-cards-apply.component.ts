import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-cards-apply',
  templateUrl: './credit-cards-apply.component.html',
  styleUrls: ['./credit-cards-apply.component.scss']
})
export class CreditCardsApplyComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  backButton(){
    this._location.back();
  }
}
