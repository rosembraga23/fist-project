import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu';
  constructor(private router: Router) {}

  // onMenuClick(opcao: string) {
  //   console.log('Selecionado:', opcao);
  //   const url = `${opcao}.html`;
  // return `Clique aqui para acessar a página: <a href="${url}">${url}</a>`;
  // }

  onMenuClick(opcao: string) {
    console.log('Selecionado:', opcao);
    this.router.navigate([opcao]);
  }
}
