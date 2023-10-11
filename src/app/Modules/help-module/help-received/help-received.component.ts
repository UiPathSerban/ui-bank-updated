import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-received',
  templateUrl: './help-received.component.html',
  styleUrls: ['./help-received.component.scss']
})
export class HelpReceivedComponent implements OnInit {
  constructor(private _location: Location){}
  ngOnInit(): void {}

  backButton(){ this._location.back(); }
}
