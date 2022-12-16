import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactmeComponent } from './contactme/contactme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';  
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { IntlInputPhoneModule } from 'intl-input-phone';


@NgModule({
  declarations: [
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
    ModalModule,
    IntlInputPhoneModule,
    ContactMeRoutingModule, 
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  providers: [BsModalService],
})
export class ContactMeModule { }
