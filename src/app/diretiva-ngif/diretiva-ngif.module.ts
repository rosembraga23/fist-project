import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DiretivaNgifComponent } from './diretiva-ngif.component';

@NgModule({
  declarations: [ DiretivaNgifComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  bootstrap: [DiretivaNgifComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class DiretivaNgifModule { }
