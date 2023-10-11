import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agreement-popup',
  templateUrl: './agreement-popup.component.html',
  styleUrls: ['./agreement-popup.component.scss']
})
export class AgreementPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
