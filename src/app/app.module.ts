import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // AppRoutingModule,
    BrowserAnimationsModule,//
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,//
    MatInputModule,//
    MatButtonModule,//
    MatCardModule,//
    // ReactiveFormsModule,
    // MatInputModule//

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
