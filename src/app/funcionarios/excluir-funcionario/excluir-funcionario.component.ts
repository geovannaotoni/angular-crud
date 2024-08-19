import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir-funcionario',
  templateUrl: './excluir-funcionario.component.html',
  styleUrls: ['./excluir-funcionario.component.css']
})
export class ExcluirFuncionarioComponent implements OnInit {
  funcionario!: Funcionario;
  inputdata: any;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirFuncionarioComponent>
  ) { }

  ngOnInit(): void {
    this.inputdata = this.data;

    this.funcionarioService.getFuncionarioById(this.inputdata.id).subscribe(data => {
      this.funcionario = data; 
    });
  }

  excluir(){
    this.funcionarioService.deleteFuncionario(this.inputdata.id).subscribe(data => {
      this.ref.close();
      window.location.reload();
    });
  }

  cancelar() {
    this.ref.close();
    this.router.navigate(['/funcionarios']);
  }
}
