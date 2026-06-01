import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { provideRouter } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

});

