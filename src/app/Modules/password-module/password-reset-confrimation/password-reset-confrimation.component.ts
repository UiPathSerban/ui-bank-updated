import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-reset-confrimation',
  templateUrl: './password-reset-confrimation.component.html',
  styleUrls: ['./password-reset-confrimation.component.scss']
})
export class PasswordResetConfrimationComponent implements OnInit{

  public sub: any;
  public valid: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const validValue = params['valid'];
      if (validValue === "true") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    });
  }
}
