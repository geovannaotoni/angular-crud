import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFuncionariosComponent } from './criar-funcionarios.component';

describe('CriarFuncionariosComponent', () => {
  let component: CriarFuncionariosComponent;
  let fixture: ComponentFixture<CriarFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
