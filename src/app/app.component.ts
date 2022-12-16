import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

    ngOnInit(): void {

      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 77) {
          $('.goToTop').addClass('displayGoToTop')
        }
        if (scroll <= 77) {
          $('.goToTop').removeClass('displayGoToTop')
        }
      });

      document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
      };
      $(document).keypress("u",function(e:any) {
        if(e.ctrlKey)
        {
      return false;
      }
      else
      {
      return true;
      }
      });
      $(document).bind("contextmenu",function(e:any){
        return false;
      });

    }

  goToTop() {
    window.scrollTo(0, 0);
  }
}
