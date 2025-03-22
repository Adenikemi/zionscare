import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import emailjs  from  '@emailjs/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageModalService } from '../../core/services/page-modal.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  dialog = inject(MatDialog);
  pageModalService = inject(PageModalService);
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  childName: string = '';
  childAge: string = '';
  reason: string = '';

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOS) => {
        AOS.init();
        AOS.refresh();
      });
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    emailjs.init('NA6ryad6mQkycsSvi');
  }

  sendEmail() {
    const templateParams = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      childName: this.childName,
      childAge: this.childAge,
      reason: this.reason
    };

    emailjs.send('service_in33cgt', 'template_sipxebr', templateParams)
      .then(() => {
        this.submit("SUCCESS");
      }, (error) => {
        console.error('FAILED...', error);
        this.submit("ERROR");
      });
  }


  submit(type: "SUCCESS" | "ERROR") {
    if (type) {
      this.pageModalService.open({
        type: "success",
        heading: "Request sent successfully",
        buttons: { continue: "Done" }
      })
    }
    else {
      this.pageModalService.open({
        type: "error",
        heading: "Something went wrong",
        buttons: { continue: "Try Again" }
      })
    }
  }
}
