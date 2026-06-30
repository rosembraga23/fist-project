import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataBindingComponent //incluir o componente DataBindingComponent no módulo DataBindingModule, 
                        // para organizar melhor os componentes relacionados a data binding, e evitar que o AppModule fique muito carregado de componentes
  ],
  exports: [DataBindingComponent],
  imports: [
      CommonModule,
      MatIconModule,
      RouterModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormsModule
    ],
  bootstrap: [DataBindingComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class DataBindingModule { }
