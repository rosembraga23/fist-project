import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
  ],
  exports: [InputComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class InputModule { }
