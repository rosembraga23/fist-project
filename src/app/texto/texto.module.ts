import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoComponent } from './texto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TextoComponent //PARA EXPORTAR O COMPONENTE
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [TextoComponent], //PARA EXPORTAR O COMPONENTE
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class TextoModule { } //PARA EXPORTAR O COMPONENTE "export"
