import { TextoComponent } from './../texto/texto.component';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Colors, Legend } from 'chart.js';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements AfterViewInit {


  @ViewChild("meuCanvas", {static: true}) elemento!: ElementRef

  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() titulo: string = '';

   chart!: Chart;

    ngAfterViewInit(): void {
    this.criarGrafico();
  }


  //ngOnInit(){

  criarGrafico(): void {
   this.chart = new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        //labels:["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        labels: this.labels,
        datasets: [
          {
              //data:[2, 20, 10, 13, 5],
              label: this.titulo,
              data: this.data,
              backgroundColor: ["blue", "yellow", "pink", "red", "orange"],
              //label: "Meses"
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
  //}

}
