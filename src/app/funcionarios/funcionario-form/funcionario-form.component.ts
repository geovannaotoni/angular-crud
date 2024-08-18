import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  funcionariosForm!: FormGroup;
  @Output() submitFuncionario = new EventEmitter<Funcionario>();
  @Input() btnAction!: string;
  @Input() btnTitle!: string;
  @Input() dadosFuncionario: Funcionario | null = null;
  
  constructor() { }
  
  ngOnInit(): void {
    this.funcionariosForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario?.nome || '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario?.sobrenome || '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario?.departamento || '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario?.turno || '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataCriacao: new FormControl(new Date()),
      dataAtualizacao: new FormControl(new Date()),
    });
    // console.log(this.dadosFuncionario);
  }
  
  submit() {
    // console.log(this.funcionariosForm.value);
    this.submitFuncionario.emit(this.funcionariosForm.value);
  }
}
