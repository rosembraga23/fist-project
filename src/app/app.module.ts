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
import { TextoModule } from './texto/texto.module';
import { InputModule } from './input/input.module';
import { HttpClientModule } from '@angular/common/http';
import { CepModule } from './cep/cep.module';
import { CursoComponent } from './curso/curso.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { GraficoComponent } from './grafico/grafico.component';
import { VideoComponent } from './video/video.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DiretivaNgifModule } from './diretiva-ngif/diretiva-ngif.module';
import { CalculatorModule } from './calculator/calculator.module';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    DataBindingComponent,
    GraficoComponent,
    VideoComponent,
    OutputPropertyComponent, 
    GraficoBarraComponent,
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
    TextoModule,
    InputModule,
    HttpClientModule,
    CepModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    DiretivaNgifModule,
    CalculatorModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
})
export class AppModule { }
