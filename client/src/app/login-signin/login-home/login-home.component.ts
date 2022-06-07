import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    "username": new UntypedFormControl(null, Validators.required),
    "password": new UntypedFormControl(null, Validators.compose([
      Validators.minLength(5),
      Validators.required
      // Must contain letters (both uppercase and lowercase) and numbers
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ]))
  });

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value)
    // Should the component handle an observable?
    this.auth.signInUser(this.loginForm.value.username, this.loginForm.value.password);
    this.loginForm.reset();
  }

}
