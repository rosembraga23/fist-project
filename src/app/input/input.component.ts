import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = "email";       // Tipo do input (text, password, email, etc.)
  @Input() size: string = "small";     // small | medium | large
  @Input() color: string = "red"    // Cor da fonte
  @Input() required: boolean = true;   // Se é obrigatório
  @Input() label: string = "Nome";      // Label exibida acima do input
}

