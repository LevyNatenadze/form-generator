import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export type FieldType = 'text' | 'email' | 'select' | 'checkbox' | 'date';
export type ValidatorType = 'required' | 'email' | 'minLength' | 'maxLength';

export interface FormFieldBase {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  defaultValue?: any;
  validators?: ValidatorType[];
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectField extends FormFieldBase {
  type: 'select';
  options: {
    label: string;
    value: SelectOption[] | Observable<SelectOption[]>;
  };
}

export type FormField = FormFieldBase | SelectField;

export interface FormSchema {
  title?: string;
  fields: FormField[];
}
