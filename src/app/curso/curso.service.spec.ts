import { TestBed } from '@angular/core/testing';
import { CursoService } from './curso.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

describe('CursoService', () => {
  let service: CursoService;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [CursoService],
    imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatIconModule,
      NoopAnimationsModule,
      MatInputModule
    ]
  }).compileComponents();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
