import { MatDividerModule } from '@angular/material/divider';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { TextoModule } from '../texto/texto.module';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    FormsModule, // este módulo tirou erro do html [(ngModel)]="number1"
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    // TextoModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CalculatorModule { }
