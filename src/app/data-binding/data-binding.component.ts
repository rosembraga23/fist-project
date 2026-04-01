import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent{

  url = 'http://loiane.com';
  cursoAngular = false;
  urlImagem = 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY';

 
  getValor(){
    return 1;
  }
  
  getCurtirCurso(){
    return true;
  }


}
