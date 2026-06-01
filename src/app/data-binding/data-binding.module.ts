import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';



@NgModule({
  declarations: [
    DataBindingComponent //incluir o componente DataBindingComponent no módulo DataBindingModule, 
                        // para organizar melhor os componentes relacionados a data binding, e evitar que o AppModule fique muito carregado de componentes
  ],
  exports: [DataBindingComponent],
  imports: [
    CommonModule,
  ],
  bootstrap: [DataBindingComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class DataBindingModule { }
