import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  threadForm = new UntypedFormGroup({
    "title": new UntypedFormControl(null, Validators.required),
    "content": new UntypedFormControl(null, Validators.required)
  })

  isAuthenticated: boolean = false;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  onSubmit(): void {
    console.log(this.threadForm.value)
    this.threadForm.reset();
  }

}
