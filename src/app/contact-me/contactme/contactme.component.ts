import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';  
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  public name: any;
  public company: any;
  public email: any;
  public phone: any;
  public comments: any;
  public myForm!: FormGroup; 
  constructor(private toastr: ToastrService, private fb: FormBuilder, private modalService: BsModalService) { }
  modalRef!: BsModalRef;
  
  
    ngOnInit() { 
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        company: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        comments: ['', Validators.required],
      }); 
    } 

  onSubmit(event: FormGroup, showData: TemplateRef<any> ) { 
    
    console.log(event)
    this.name = this.myForm.value.name;
    this.company = this.myForm.value.company;
    this.email = this.myForm.value.email;
    this.phone = this.myForm.value.phone;
    this.comments = this.myForm.value.comments;
    this.toastr.success('Thank you!, Your form has been submitted successfully');
    this.toastr.info('Sending Emails functionality is under progress. You can enter the details and see the data in modal which you submitted.');
    this.modalRef = this.modalService.show(showData);
    this.myForm.reset();
    
  }

}
