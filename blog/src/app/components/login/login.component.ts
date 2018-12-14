import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials;
  logged;
  logout;


  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  signIn() {
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
