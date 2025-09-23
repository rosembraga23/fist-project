import { CepResponse, CepService } from './../app/service/cep/cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}