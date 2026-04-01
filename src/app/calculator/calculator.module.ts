import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    FormsModule, // este módulo tirou erro do html [(ngModel)]="number1"
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    // MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    // TextoModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CalculatorModule { }
