import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email]],
      phonePrefix: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      country: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      confirmContact: ['', [Validators.required]],
      generalTerms: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

}
