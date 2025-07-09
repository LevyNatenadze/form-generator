import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../../../../core/types/form-schema';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-text-input',
  template: `
    <div class="text-field" [formGroup]="form()">
      <label [for]="field().name">{{ field().label }}</label>
      <input
        type="text"
        class="form-control"
        [formControlName]="field().name"
        [id]="field().name"
        [placeholder]="field().placeholder"
      />
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class TextInputComponent extends BaseInputComponent {}
