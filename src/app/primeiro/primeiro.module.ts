import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroRoutingModule } from './primeiro-routing.module';
import { PrimeiroComponent } from './primeiro.component';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    PrimeiroRoutingModule,
    MatInputModule,
    MatIconModule,
    RouterModule
  ],
  bootstrap: [PrimeiroComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PrimeiroModule { }