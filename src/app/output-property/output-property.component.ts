import { Component } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

valor: number = 0;

decrementa(){
 this.valor--;
}

incrementa(){
 this.valor++;
}

}
