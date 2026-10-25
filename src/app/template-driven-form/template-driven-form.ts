import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [FormsModule, JsonPipe],
  selector: 'app-template-driven-form',
  styleUrl: './template-driven-form.css',
  templateUrl: './template-driven-form.html',
})
export class TemplateDrivenForm {
  employee = { name: '', email: '', age: null as number | null };
  submitted = false;
  submit(form: any) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    console.log('Employee:', this.employee);
  }
}
