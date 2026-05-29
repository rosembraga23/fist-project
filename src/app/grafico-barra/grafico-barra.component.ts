import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrl: './grafico-barra.component.css'
})
export class GraficoBarraComponent {
  constructor(private router: Router) {}
  
// Método para navegar de volta para a página inicial
irParaHome() {
this.router.navigate(['/home']);
}

}