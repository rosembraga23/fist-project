import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from './curso.service';
import { CursoComponent } from './curso.component';
import { DataBindingModule } from '../data-binding/data-binding.module';
import { FormsModule } from '@angular/forms';
import { GraficoModule } from '../grafico/grafico.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CursoComponent,
    ],
  imports: [
    // módulo de funcionalidades comuns, como ngIf, ngFor, etc.
    // Deve ser importado em todos os módulos que utilizam essas funcionalidades
    FormsModule,
    CommonModule,  
    //importado aqui e exportado em DataBindingModule
    DataBindingModule,

    //deve ser importado onde está sendo utilizado o componente GraficoComponent, 
    // e exportado em GraficoModule para garantir que ele seja reconhecido e possa ser utilizado sem erros de validação
    GraficoModule,
    MatIconModule,
    RouterModule,
    MatTableModule
  ],
  providers: [
    CursoService // serviço que será utilizado pelos componentes do módulo curso 
                // sempre em providenciar o serviço no módulo, para garantir que ele seja singleton e compartilhado entre os componentes do módulo
  ],
  bootstrap: [CursoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class CursoModule { }
