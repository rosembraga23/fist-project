import { CepModule } from './cep/cep.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextoComponent } from './texto/texto.component';
import { InputComponent } from './input/input.component';
import { CepComponent } from './cep/cep.component';
import { CursoComponent } from './curso/curso.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { GraficoComponent } from './grafico/grafico.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    component: AboutComponent
  },
  {
    path: 'primeiro',
    loadChildren: () => import('./primeiro/primeiro.module').then(m => m.PrimeiroModule),
    component: PrimeiroComponent
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule),
    component: CalculatorComponent
  },
  {
    path: 'texto',
    loadChildren: () => import('./texto/texto.module').then(m => m.TextoModule),
    component: TextoComponent
  },
  {
  path: 'grafico',
  loadChildren: () => import('./grafico/grafico.module').then(m => m.GraficoModule),
  component: GraficoComponent
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then(m => m.InputModule),
    component: InputComponent
  },
  {
    path: 'cep',
    loadChildren: () => import('./cep/cep.module').then(m => m.CepModule),
    component: CepComponent
  },
   {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule),
    component: CursoComponent
  },
  {
   path: 'dataBinding',
   loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule),
   component: DataBindingComponent
  },
  

  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }