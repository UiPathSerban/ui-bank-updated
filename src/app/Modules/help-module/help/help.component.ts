import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

  sendContactEmail(form: NgForm){
    console.log('Help Request sent!')
    console.log('This is a testing app, actual data was not sent.')
  }
}
