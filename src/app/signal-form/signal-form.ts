import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormField, form, required, email, min } from '@angular/forms/signals';
@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-signal-form',
  styleUrl: './signal-form.css',
  templateUrl: './signal-form.html',
})
export class SignalForm {
  protected readonly title = signal('signal-form');
  employee = signal({
    name: '',
    email: '',
    age: 0,
  });
  employeeForm = form(this.employee, (schema) => {
    required(schema.name);
    required(schema.email);
    email(schema.email);
    required(schema.age);
    min(schema.age, 18);
  });
  submitted = signal(false);
  submit(event: SubmitEvent) {
    event.preventDefault();

    // this.submitted.set(true);

    // if (this.employeeForm().invalid()) {
    //   return;
    // }
    console.log(this.employee());
  }
}
