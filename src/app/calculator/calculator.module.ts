import { MatDividerModule } from '@angular/material/divider';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    FormsModule, // este módulo tirou erro do html [(ngModel)]="number1"
    MatIconModule,
    MatButtonModule,
    MatDividerModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CalculatorModule { }
