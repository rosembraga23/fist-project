import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent{

  url: string = 'http://loiane.com';
  cursoAngular: boolean = false;
  urlImagem: string = 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY';

  constructor(){ }
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }


}
