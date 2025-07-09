import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType, FormField } from '../../../core/types/form-schema';
import { TextInputComponent } from './inputs/text-input/text-input.component';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  imports: [TextInputComponent],
})
export class DynamicFieldComponent {
  form = input.required<FormGroup>();
  field = input.required<FormField>();
}
