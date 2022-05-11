import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ValidationFormsService } from '../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  providers: [ValidationFormsService],
})
export class RegisterComponent implements OnInit {
  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';

  registerForm: FormGroup;
  submitted = false;
  formErrors: any;

  constructor(private fb: FormBuilder, public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
    this.initRegisterForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    //this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(this.vf.formRules.passwordMin),
          Validators.pattern(this.vf.formRules.passwordPattern),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vf.formRules.phonePattern),
        ],
      ],
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onValidate() {
    this.submitted = true;

    console.log(this.registerForm.status);
    // stop here if form is invalid
    return this.registerForm.status === 'VALID';
  }

  onSubmit(): void {
    console.warn(this.onValidate(), this.registerForm.value);
    //if (this.registerForm.invalid) return;
    console.log(this.onValidate());
    if (this.onValidate()) {
      // TODO: Use EventEmitter with form value
      console.warn(this.registerForm.value);
      console.log('SUCCESS!');
    }
  }
}
