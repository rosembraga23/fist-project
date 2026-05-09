import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  livro: any = {
    titulo: 'O Senhor dos Anéis',
    rating: 4.8435,
    numeroPaginas: 1178,
    autor: 'J.R.R. Tolkien',
    preco: 49.90,
    dataLancamento: new Date(1954, 6, 29),
    url: 'https://www.youtube.com/watch?v=Al5iC4CnhYc'
  };

}
