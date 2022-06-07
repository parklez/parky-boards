import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SigninHomeComponent implements OnInit {

  signinForm = new FormGroup({
    "username": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.signinForm.value)
    // Should the component handle an observable?
    this.auth.signUpUser(this.signinForm.value.username, this.signinForm.value.password);
    this.signinForm.reset();
  }

}
