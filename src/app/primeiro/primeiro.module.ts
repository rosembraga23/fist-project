import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroRoutingModule } from './primeiro-routing.module';
import { PrimeiroComponent } from './primeiro.component';
// import { TextoModule } from "../texto/texto.module";

@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    PrimeiroRoutingModule,
    // TextoModule
]
})
export class PrimeiroModule { }