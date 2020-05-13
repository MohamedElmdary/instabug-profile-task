import { Component } from '@angular/core';

import { sumitAnimation } from '@animations/contacts';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [sumitAnimation]
})
export class ContactsComponent {
  isSubmited = false;

  attachements: File[] = [];

  messageForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.maxLength(500)]]
  });

  get email() {
    return this.messageForm.get('email') as FormControl;
  }

  get subject() {
    return this.messageForm.get('subject') as FormControl;
  }

  get message() {
    return this.messageForm.get('message') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  submitHandler() {
    // some logic to handle submition
    this.isSubmited = true;
    console.log(this.messageForm.value);
    console.log(this.attachements);
  }

  removeAttachement(idx: number) {
    this.attachements.splice(idx, 1);
  }

  onAddFiles(fl: FileList) {
    for (let i = 0; i < fl.length; i++) {
      if (!this.attachements.some(atch => atch.name === fl.item(i).name)) {
        this.attachements.push(fl.item(i));
      }
    }
  }
}
