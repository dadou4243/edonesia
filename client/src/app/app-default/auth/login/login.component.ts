import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserState, Login, getIsLoginLoading } from 'src/app/store/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: Observable<boolean>;
  errorMessage: string;

  constructor(private fb: FormBuilder, private store: Store<UserState>) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.isLoading = this.store.pipe(select(getIsLoginLoading));
  }

  onConfirm() {
    this.store.dispatch(Login({ loginInfo: this.loginForm.value }));
  }
}
