import { Component, computed, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../core/types/form-schema';

@Component({
  template: '',
})
export abstract class BaseInputComponent {
  form = input.required<FormGroup>();
  field = input.required<FormField>();

  control = computed(() => this.form().get(this.field().name));

  isInvalid = computed(
    () =>
      !!this.control()?.invalid &&
      (this.control()?.touched || this.control()?.dirty)
  );
}
