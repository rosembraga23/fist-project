import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  public alunos: any[] = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 25 }
  ];

  getAlunos() {
    return this.alunos;
  }

  constructor() { }
}


