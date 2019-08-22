import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: [''],
      lastName: ['']
      // role: ['', [Validators.required]],
    });
  }

  onConfirm() {
    console.log(this.signupForm.value);
    this.authService.signUp(this.signupForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
