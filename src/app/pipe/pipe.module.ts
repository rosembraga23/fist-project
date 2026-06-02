import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PipeComponent } from './pipe.component';



@NgModule({
  declarations: [PipeComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  bootstrap: [PipeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
})
export class PipeModule { }
