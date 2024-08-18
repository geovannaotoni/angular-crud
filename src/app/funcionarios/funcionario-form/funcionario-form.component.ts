import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  funcionariosForm!: FormGroup;
  @Output() submitFuncionario = new EventEmitter<Funcionario>();
  
  constructor() { }
  
  ngOnInit(): void {
    this.funcionariosForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      departamento: new FormControl(''),
      turno: new FormControl(''),
      ativo: new FormControl(true),
      dataCriacao: new FormControl(new Date()),
      dataAtualizacao: new FormControl(new Date()),
    });
  }
  
  submit() {
    // console.log(this.funcionariosForm.value);
    this.submitFuncionario.emit(this.funcionariosForm.value);
  }
}
