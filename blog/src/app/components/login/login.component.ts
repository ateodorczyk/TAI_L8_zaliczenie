import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials;
  logged;
  logout;
  loginForm: FormGroup;


  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.credentials = new Credentials();
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.credentials.login = this.loginForm.get('login').value;
    this.credentials.password = this.loginForm.get('password').value;

    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/blog']);
      }
    });

  }

  get f() { return this.loginForm.controls; }

  signIn() {

  }




// {
//   "login": "agteo@email.pl",
//   "password": "12345"
// }
//
// {
//   "name": "agteo",
//   "email": "agteo@email.pl",
//   "password":"12345"
// }


}

export class Credentials {
  login?: string;
  password?: string;
}
