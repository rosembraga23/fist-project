import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
  cep: string = '';
  resultado: any;

  constructor(private cepService: CepService) {}

  buscarCep() {
    this.cepService.getCep(this.cep).subscribe({
      next: (data) => this.resultado = data,
      error: (err) => console.error('Erro ao buscar CEP:', err)
    });
  }

}
