import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(".toggle-button").click(function(){  
    //   $('.navbar-toggle-width').toggleClass('makeResponsive')
    //   $(".toggle-main-nav").animate({
    //       width: "toggle"
    //   });
    // }); 

  $(window).on("resize", function () {
    checkScreenSize();
});

checkScreenSize();

function checkScreenSize(){
    var newWindowWidth = $(window).width();
    if (newWindowWidth <= 991) {
      $(".toggle-button").click(function(){  
        $('.navbar-toggle-width').toggleClass('makeResponsive');
        $('body').toggleClass('displayMenu')
    }); 
    $(".toggle-main-nav").click(function(){
      $('.navbar-toggle-width').removeClass('makeResponsive');
    })
    }
    else
    {  }
}  
  } 

}
 