import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';

  loginForm: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
