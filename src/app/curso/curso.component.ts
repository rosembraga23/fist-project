import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent{
  nomePortal: string;

  // cursos: string[] = ['Java', 'Angular', 'Python'];
  cursos: string[] | undefined;
  

constructor(private servicoCurso: CursoService){

  this.nomePortal = "http://loiane.training";
  
  this.cursos = this.servicoCurso.getCursos();

  // for(let i=0; i<this.cursos.length; i++){
  //   let curso = this.cursos[i];
  // }
}

}
