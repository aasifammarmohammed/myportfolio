import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
