import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onConfirm() {
    console.log('confirm login');
    this.isLoading = true;
    this.authService.logIn(this.loginForm.value).subscribe(
      res => {
        this.isLoading = false;

        console.log(res);
        if (res.isConnected) {
          this.router.navigate(['/']);
        }
      },
      err => {
        this.isLoading = false;

        console.log('err:', err);
        this.errorMessage = err.error.message;
      }
    );
  }
}
