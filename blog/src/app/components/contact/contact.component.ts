import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}
