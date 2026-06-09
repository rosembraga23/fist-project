import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosService } from './alunos.service';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoDetalheComponent,
    AlunoFormComponent

  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
