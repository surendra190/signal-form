import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  employeeForm;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.required, Validators.min(18)]],
    });
  }
  submitted = false;
  submit() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    console.log('Employee:', this.employeeForm.value);
  }
}
