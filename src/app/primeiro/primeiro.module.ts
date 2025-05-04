import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroRoutingModule } from './primeiro-routing.module';
import { PrimeiroComponent } from './primeiro.component';

@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    PrimeiroRoutingModule
  ]
})
export class PrimeiroModule { }