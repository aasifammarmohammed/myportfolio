import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // if (this.router.url === '/home') {
    //   this.calculateHeight();
    // }
    // $( window ).resize(function() {
    //       var $container = $('.home-container');
    //       var $height = $(document).height() - 100
    //       $container.height($height) 
    // });
    
  }

  // public calculateHeight() {
  //   var $container = $('.home-container');
  //   var $height = $(document).height() - 100
  //   $container.height($height) 
  // }

  // ngOnDestroy(){
  //  this.calculateHeight()
  // }

}
