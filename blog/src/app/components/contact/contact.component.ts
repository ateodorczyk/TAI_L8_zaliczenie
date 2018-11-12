import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl( '',Validators.required),
      surname: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sex: new FormControl('', Validators.required),
      desc: new FormControl('', [Validators.maxLength(50)]),
      age: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
    });
  }

}
