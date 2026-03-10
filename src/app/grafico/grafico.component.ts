import { TextoComponent } from './../texto/texto.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Colors, Legend } from 'chart.js';
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
        labels:["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
          {
              data:[30, 20, 10, 13, 5],
              backgroundColor: ["blue", "yellow", "pink", "red"],
              label: "Meses"
          },
          
        ]
      },
      options: {
        plugins: {
          title: {
                display: true,
                text: 'Título do Gráfico'
            },
          subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            },
            legend: {
              display: true, 
              
                labels: {      
                    // This more specific font property overrides the global property
                    font: {
                        size: 24
                    }
                }
            }
        }
      }
    });
  }

}
