import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextoModule } from '../texto/texto.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TextoModule //PARA IMPORTAR O COMPONENTE TEXTO
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[ ]
})
export class AboutModule { }
