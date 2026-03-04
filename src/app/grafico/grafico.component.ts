import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit{

  @ViewChild("meuCanvas", {static: true}) elemento!: ElementRef
  ngOnInit(){
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels:["Janeiro", "Fevereiro", "Março", "Abril"],
        datasets: [
          {
              data:[30, 20, 10, 13]
          }
          
        ]
      }
    });
  }



}
