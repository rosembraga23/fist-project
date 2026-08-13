import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nomePrtal: string;

  // cursos: string[] = ['Java', 'Angular', 'Python'];
  public cursos: any[] = [];
  
  displayedColumns: string[] = ['id', 'nome'];

constructor(private servicoCurso: CursoService){

  this.nomePrtal = "http://loiane.training";
  }

  ngOnInit(): void {
    this.cursos = this.servicoCurso.getCursos();
  }

  // for(let i=0; i<this.cursos.length; i++){
  //   let curso = this.cursos[i];
  // }
}

