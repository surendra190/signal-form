import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormField, form, required, email, min } from '@angular/forms/signals';
import { Child } from './child/child';
import { JsonPipe } from '@angular/common';
@Component({
  imports: [RouterLink, RouterOutlet, Child, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  value: string = 'Hello World!';
  newValue: string = '';
  raj($event: any) {
    this.newValue = $event;
  }
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
