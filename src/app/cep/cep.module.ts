import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- IMPORTANTE
import { CepComponent } from './cep.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CepComponent],
  imports: [
    // CommonModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // JsonPipe,
    // FormsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCardModule,
    CommonModule,   // ✅ substitui o BrowserModule
  FormsModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  ReactiveFormsModule
  
  ],
   providers: [],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class CepModule { }
