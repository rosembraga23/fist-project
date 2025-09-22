import { CepResponse, CepService } from './../service/cep/cep.service';
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