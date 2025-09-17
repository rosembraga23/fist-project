import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private apiUrl = 'https://brasilapi.com.br/api/cep/v1';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cep}`);
  }
}