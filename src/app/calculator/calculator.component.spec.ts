import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        NoopAnimationsModule,
        MatInputModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois números corretamente', () => {
    component.number1Ctrl.setValue('10');
    component.number2Ctrl.setValue('20');

    component.sumNumbers();

    expect(component.result).toBe(30);
  });

  it('não deve somar quando os campos estiverem vazios', () => {
    component.number1Ctrl.setValue('');
    component.number2Ctrl.setValue('');

    component.sumNumbers();

    expect(component.result).toBe(0);
    expect(component.number1Ctrl.touched).toBeTrue();
    expect(component.number2Ctrl.touched).toBeTrue();
  });

  it('deve limpar os campos e zerar o resultado', () => {
    component.number1Ctrl.setValue('10');
    component.number2Ctrl.setValue('20');
    component.result = 30;

    component.clearNum();

    expect(component.number1Ctrl.value).toBeNull();
    expect(component.number2Ctrl.value).toBeNull();
    expect(component.result).toBe(0);
  });
});