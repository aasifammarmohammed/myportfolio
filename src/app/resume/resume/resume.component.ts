import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
declare var $: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public yearsOfExperience:any

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    const moment = require('moment');

    let years = moment().diff('2018-09-06', 'years');
    this.yearsOfExperience = years;

    if ($(window).width() <= 991) {
      this.toastr.info('Please Scroll Horizontally the Screen to view the full Page');
    }
  }

}
