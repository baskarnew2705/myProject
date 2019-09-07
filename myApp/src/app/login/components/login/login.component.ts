import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { UserDataResponse } from '../../../models/getuser-models';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Route, Router } from '@angular/router';
import { APP_CONST } from 'src/app/config/app.const';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean;
  appConst = APP_CONST;

  constructor(private fb: FormBuilder, private commonService: CommonService, private auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  public login() {
    console.log('FormVal:', this.loginForm);
    const loginData = this.loginForm.value;
    this.invalidLogin = false;
    this.commonService.checkLoginStatus(loginData).subscribe((response: UserDataResponse) => {
      if (response.status) {
        this.auth.loggedIn = true;
        this.router.navigate(['/home']);
      } else {
        this.auth.loggedIn = false;
        this.invalidLogin = true;
      }
    }, error => {
      this.auth.loggedIn = true;
    });
  }


}
