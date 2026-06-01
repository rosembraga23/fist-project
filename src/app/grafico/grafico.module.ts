import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico.component';



@NgModule({
  declarations: [
  //declaro aqui o GraficoComponent, para organizar melhor os componentes de funcionalidades
  // e retiro do AppModule para evitar que fique muito carregado de componentes
    GraficoComponent 
  ],

  imports: [
    CommonModule
  ],

  //inclui o o componente GraficoComponent no bootstrap do módulo, para garantir 
  // que ele seja carregado quando o módulo for carregado
  bootstrap: [GraficoComponent], 

  exports: [
    //tem que ser exportado para que outros componentes possam utilizar (importando o componente GraficoMo
    
    GraficoComponent
  ],

  //inclui o CUSTOM_ELEMENTS_SCHEMA no schemas do módulo, para permitir o uso de elementos
  // personalizados (como o canvas do Chart.js) sem que o Angular gere erros de validação
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class GraficoModule { }
