import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
   public cursos: any[] = [
   { id: 1, nome: 'Java'},
   { id: 2, nome: 'Angular'},
   { id: 3, nome: 'Python'}
 ];
 getCursos() {
   return this.cursos;
 }
}
