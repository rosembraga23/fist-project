import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalcuCalculatorComponentlatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve somar dois números corretamente', () => {
    component.number1 = 10;
    component.number2 = 20;
    component.sumNumbers();
    expect(component.result).toBe(30);
  });

  it('deve retornar 0 se os dois números forem 0', () => {
    component.number1 = 0;
    component.number2 = 0;
    component.sumNumbers();
    expect(component.result).toBe(0);
  });

  it('deve lidar com números negativos', () => {
    component.number1 = -5;
    component.number2 = -10;
    component.sumNumbers();
    expect(component.result).toBe(-15);
  });
});
