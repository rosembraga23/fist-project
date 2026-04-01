import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  number1 = 0;
  number2 = 0;
  result = 0;

  sumNumbers(): void {
    this.result = this.number1 + this.number2;
  }

  clearNum(): void {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }

    textoCtrl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[A-Z]*$') // Apenas letras maiúsculas
    ]);
  

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    // Força o valor para maiúsculo
    input.value = input.value.toUpperCase();
    if (input.value.length){
      //this.textoCtrl.dirty;
      //this.textoCtrl.touched;
    }
    this.textoCtrl.setValue(input.value, { emitEvent: false });
  }


}
