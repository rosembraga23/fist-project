import { CepService } from './cep.service';
import { TestBed } from '@angular/core/testing';

describe('CepService', () => {
  let service: CepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});