import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    // CommonModule, // a inclusão deste módulo apresentou erro no resultado da calculadora
    // CalculatorRoutingModule, // a inclusão deste módulo apresentou erro no resultado da calculadora
    FormsModule // este módulo tirou erro do html [(ngModel)]="number1"
  ]
})
export class CalculatorModule { }
