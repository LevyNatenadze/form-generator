import { Injectable } from '@angular/core';
import { FormSchema, ValidatorType } from '../core/types/form-schema';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormGeneratorService {
  generateForm(schema: FormSchema): FormGroup {
    if (!schema || !schema.fields?.length) {
      return new FormGroup({});
    }
    const controls: Record<string, FormControl> = {};
    schema.fields.forEach((field) => {
      const validatorFns = this.resolveValidators(field.validators);
      controls[field.name] = new FormControl('', validatorFns);
      console.log(controls);
    });
    return new FormGroup(controls);
  }

  private resolveValidators(validators?: ValidatorType[]): ValidatorFn[] {
    if (!validators) return [];

    return validators
      .map((validator) => {
        switch (validator) {
          case 'required':
            return Validators.required;
          case 'email':
            return Validators.email;
          case 'minLength':
            return Validators.minLength(3);
          case 'maxLength':
            return Validators.maxLength(15);

          default:
            return null;
        }
      })
      .filter((v): v is ValidatorFn => v !== null);
  }
}
