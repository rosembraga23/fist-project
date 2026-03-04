import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = "";       // Tipo do input (text, password, email, etc.)
  @Input() size: string = "";     // small | medium | large
  @Input() color: string = ""    // Cor da fonte
  @Input() required: boolean = true;   // Se é obrigatório
  @Input() label: string = "";      // Label exibida acima do input

textoCtrl = new FormControl('', [
  Validators.required,
  Validators.maxLength(50),
  Validators.pattern('^[A-Z]*$') // Apenas letras maiúsculas
]);


}

