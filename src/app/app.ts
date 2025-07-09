import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { FormSchema } from './core/types/form-schema';

@Component({
  selector: 'app-root',
  imports: [DynamicFormComponent],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-dynamic-form
        [schema]="testSchema"
        (submitted)="onSubmit($event)"
      ></app-dynamic-form>
    </div>
  `,
})
export class App {
  protected title = 'form-generator';

  testSchema: FormSchema = {
    title: 'სქემა ტესტი',
    fields: [
      {
        name: 'firstName',
        type: 'text',
        label: 'სახელი',
        placeholder: 'შეიყვანეთ თქვენი სახელი',
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'გვარი',
        placeholder: 'შეიყვანეთ თქვენი გვარი',
      },
    ],
  };

  onSubmit(event: any): void {
    console.log('Form submitted:', event);
  }
}
