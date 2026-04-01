import { CepResponse, CepService } from './../services/cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
  cep: string = '';
  resultado: CepResponse | null = null;
  error: string | null = null;
  loading = false;

  constructor(private cepService: CepService) {}

  consultar() {
    this.resultado = null;
    if (!this.cep || this.cep.length < 8) {
      this.error = 'Digite um CEP válido com 8 números';
      return;
    }
    this.error = null;
    this.resultado = null;
    this.loading = true;

    this.cepService.consultarCep(this.cep).subscribe({
      next: (data) => {
        this.resultado = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'CEP não encontrado ou inválido.';
        this.loading = false;
      }
    });
  }

permitirSomenteNumeros(event: KeyboardEvent) {
  const tecla = event.key;

  // permite apenas números e teclas de controle
  if (!/^[0-9]$/.test(tecla) &&
      tecla !== 'Backspace' &&
      tecla !== 'Delete' &&
      tecla !== 'ArrowLeft' &&
      tecla !== 'ArrowRight' &&
      tecla !== "ctrl" &&
      tecla !== 'Tab') {
    event.preventDefault(); // bloqueia a digitação
  }
}

bloquearColar(event: ClipboardEvent) {
  event.preventDefault(); // bloqueia colar
}

bloquearColarMouse(event: Event) {
  event.preventDefault(); // bloqueia colar via teclado, mouse, drag&drop
}

bloquearCliqueDireito(event: MouseEvent) {
  event.preventDefault(); // desabilita menu de contexto (botão direito)
}

//   permitirSomenteNumeros(event: KeyboardEvent) {
//   const charCode = event.key.charCodeAt(0);
//   // permite apenas dígitos de 0 a 9
//   if (charCode < 48 || charCode > 57) {
//     event.preventDefault();
//   }
// }

}