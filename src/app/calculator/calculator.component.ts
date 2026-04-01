import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  
    number1Ctrl = new FormControl('', Validators.required);
    number2Ctrl = new FormControl('', Validators.required);

    result: number = 0;

    sumNumbers() {
      const n1 = Number(this.number1Ctrl.value);
      const n2 = Number(this.number2Ctrl.value);
    
      if (!this.number1Ctrl.valid || !this.number2Ctrl.valid) {
        this.number1Ctrl.markAsTouched();
        this.number2Ctrl.markAsTouched();
        return;
      }
    
      this.result = n1 + n2;
    }

    clearNum() {
      this.number1Ctrl.reset();
      this.number2Ctrl.reset();
      this.result = 0;
  }

}