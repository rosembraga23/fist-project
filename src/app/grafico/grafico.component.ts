import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements AfterViewInit {


  @ViewChild("meuCanvas", {static: true}) elemento!: ElementRef

  @Input() labels: string[] = [];
  @Input() backgroundColor: string[] = [];
  @Input() data: number[] = [];
  @Input() titulo = '';
  @Input() subtitulo = '';
  @Input() tituloPage = '';

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
              //backgroundColor: ["blue", "yellow", "pink", "red", "orange"],
              backgroundColor: this.backgroundColor,
              //label: "Meses"
          },
          
        ]
      },
      options: {
        plugins: {
          title: {
                display: true,
                text: this.titulo,
                font: {
                        size: 24
                      }
            },
          subtitle: {
                display: true,
                text: this.subtitulo,
                font: {
                        size: 18
                      }
            },
            legend: {
              display: true, 
              
                labels: {      
                    // This more specific font property overrides the global property
                    font: {
                        size: 18
                    }
                }
            }
        }
      }
    });
    }
  //}

}
