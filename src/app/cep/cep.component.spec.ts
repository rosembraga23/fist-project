import { CepService } from './../services/cep.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CepComponent } from './cep.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;
  let cepService: jasmine.SpyObj<CepService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CepService', ['consultarCep']);

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
    ],
      declarations: [CepComponent],
      providers: [{ provide: CepService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    cepService = TestBed.inject(CepService) as jasmine.SpyObj<CepService>;
    fixture.detectChanges();
  });

  it('deve consultar CEP e retornar dados', () => {
    const mockData = {
      cep: '01001000',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Sé',
      street: 'Praça da Sé'
    };
    cepService.consultarCep.and.returnValue(of(mockData));

    component.cep = '01001000';
    component.consultar();

    expect(component.resultado).toEqual(mockData);
    expect(component.error).toBeNull();
  });

  it('deve exibir erro para CEP inválido', () => {
    component.cep = '123';
    component.consultar();
    expect(component.error).toBeTruthy();
  });

  it('deve exibir erro quando API falhar', () => {
    cepService.consultarCep.and.returnValue(throwError(() => new Error('Erro')));

    component.cep = '01001000';
    component.consultar();

    expect(component.error).toBe('CEP não encontrado ou inválido.');
    expect(component.resultado).toBeNull();
  });
});