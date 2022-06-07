import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SigninHomeComponent implements OnInit {

  signinForm = new UntypedFormGroup({
    "username": new UntypedFormControl(null, Validators.required),
    "password": new UntypedFormControl(null, Validators.required)
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
