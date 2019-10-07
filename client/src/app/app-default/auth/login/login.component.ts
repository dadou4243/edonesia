import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/core/services/jwt.service';
import { UserState, Login } from 'src/app/store/user';
import { Store } from '@ngrx/store';

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
    private router: Router,
    private jwtService: JwtService,
    private store: Store<UserState>
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
    this.store.dispatch(Login(this.loginForm.value));
    // this.authService.logIn(this.loginForm.value).subscribe(
    //   res => {
    //     this.isLoading = false;

    //     console.log('res authService login in component', res);
    //     if (res.auth) {
    //       this.jwtService.saveToken(res.token);
    //       // this.router.navigate(['/']);
    //     }
    //   },
    //   err => {
    //     this.isLoading = false;

    //     console.log('err:', err);
    //     this.errorMessage = err.error.message;
    //   }
    // );
  }
}
