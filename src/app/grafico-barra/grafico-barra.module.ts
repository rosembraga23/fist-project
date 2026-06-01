import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoBarraComponent } from './grafico-barra.component';
import { GraficoModule } from '../grafico/grafico.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GraficoBarraComponent],
  imports: [
    CommonModule,
    GraficoModule,
    MatIconModule,
    RouterModule
  ],
  bootstrap: [GraficoBarraComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class GraficoBarraModule { 
  
}
