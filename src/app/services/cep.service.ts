import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CepResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private readonly baseUrl = 'https://brasilapi.com.br/api/cep/v2';

  constructor(private http: HttpClient) {}

  consultarCep(cep: string): Observable<CepResponse> {
    return this.http.get<CepResponse>(`${this.baseUrl}/${cep}`);
  }
}