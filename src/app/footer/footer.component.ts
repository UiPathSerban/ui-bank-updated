import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import packageJson from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  protected version : string = '';

  constructor(private route: Router){}

  ngOnInit(): void {
    this.version = packageJson.version;
  }
  

  

}
