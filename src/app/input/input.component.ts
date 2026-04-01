import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type = "";       // Tipo do input (text, password, email, etc.)
  @Input() size = "";     // small | medium | large
  @Input() color = ""    // Cor da fonte
  @Input() required = true;   // Se é obrigatório
  @Input() label = "";      // Label exibida acima do input

textoCtrl = new FormControl('', [
  Validators.required,
  Validators.maxLength(50),
  Validators.pattern('^[A-Z]*$') // Apenas letras maiúsculas
]);


}

