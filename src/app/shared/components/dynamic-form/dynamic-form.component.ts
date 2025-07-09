import {
  Component,
  inject,
  input,
  OnInit,
  output,
  Signal,
} from '@angular/core';
import { FormField, FormSchema } from '../../../core/types/form-schema';
import { FormGeneratorService } from '../../../services/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './dynamic-field.component';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFieldComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="formSubmit()">
      @for (field of schemaField; track field.name) {
      <app-dynamic-field [form]="form" [field]="field"></app-dynamic-field>
      }
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
})
export class DynamicFormComponent<T = FormData> implements OnInit {
  formGenerator = inject(FormGeneratorService);

  schema = input<FormSchema | null>(null);
  submitted = output<T>();

  form!: FormGroup;

  get schemaField(): FormField[] {
    return this.schema()?.fields || [];
  }

  ngOnInit(): void {
    const schema = this.schema();
    if (schema) {
      this.form = this.formGenerator.generateForm(schema);
    }
  }

  formSubmit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.emit(this.form.value as T);
  }
}
