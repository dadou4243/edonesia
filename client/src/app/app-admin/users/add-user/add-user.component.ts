import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  roles = [
    { value: 'user', viewValue: 'User' },
    { value: 'admin', viewValue: 'Admin' }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.addUserForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: [''],
      lastName: [''],
      role: ['user', [Validators.required]]
    });
  }

  onConfirm() {
    console.log('onConfirm', this.addUserForm);
    this.authService.signUp(this.addUserForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
