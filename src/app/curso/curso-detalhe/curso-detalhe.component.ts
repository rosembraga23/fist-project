import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent implements OnInit {

  id: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log('ID do curso:', this.id); 
    console.log('Parâmetros da rota:', this.route.snapshot.paramMap);
  }
}
