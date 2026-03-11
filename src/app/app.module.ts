import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalculatorModule } from './calculator/calculator.module';
import { TextoModule } from './texto/texto.module';
import { InputModule } from './input/input.module';
import { HttpClientModule } from '@angular/common/http';
import { CepModule } from './cep/cep.module';
import { CursoComponent } from './curso/curso.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { GraficoComponent } from './grafico/grafico.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    DataBindingComponent,
    GraficoComponent,
    VideoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CalculatorModule,
    TextoModule,
    InputModule,
    HttpClientModule,
    CepModule,
    MatButtonModule,
    FormsModule,
],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
})
export class AppModule { }
