import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

  public alunos: any[] = [];

  displayedColumns: string[] = ['id', 'nome', 'idade'];

  constructor(public alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
