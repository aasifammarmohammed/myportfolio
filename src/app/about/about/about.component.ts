import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public yearsOfExperience:any
  constructor() { }
	active = 1;
  activeTab = 4
  ngOnInit(): void {
   
    const moment = require('moment');

    let years = moment().diff('2018-09-06', 'years');
    this.yearsOfExperience = years;
  }

}
