import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
  }

}
