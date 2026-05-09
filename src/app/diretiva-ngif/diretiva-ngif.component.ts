import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  cursos = ['Angular', 'JavaScript', 'TypeScript'];
  curso = new FormControl('', Validators.required);
  

  adicionarCurso(curso: string) {
    if (curso) {
      this.cursos.push(curso);
    } 
    this.curso.setValue('');
  } 

  removerCurso(curso: string) {
    const index = this.cursos.indexOf(curso);     
    if (index !== -1) {
      this.cursos.splice(index, 1);
    }
  }


}
