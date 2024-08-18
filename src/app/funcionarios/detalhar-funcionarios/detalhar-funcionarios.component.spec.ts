import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharFuncionariosComponent } from './detalhar-funcionarios.component';

describe('DetalharFuncionariosComponent', () => {
  let component: DetalharFuncionariosComponent;
  let fixture: ComponentFixture<DetalharFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
