import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  textoCtrl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern('^[A-Z]*$') // Apenas letras maiúsculas
  ]);

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    // Força o valor para maiúsculo
    input.value = input.value.toUpperCase();
    this.textoCtrl.setValue(input.value, { emitEvent: false });
  }
}
