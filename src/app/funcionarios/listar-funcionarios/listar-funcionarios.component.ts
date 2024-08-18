import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionariosGeral: Funcionario[] = []

  constructor(
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(funcionarios => {
      const data = funcionarios.map(funcionario => {
        if (funcionario.dataCriacao) {
          funcionario.dataCriacao = new Date(funcionario.dataCriacao).toLocaleDateString('pt-BR');
        }
        if (funcionario.dataAtualizacao) {
          funcionario.dataAtualizacao = new Date(funcionario.dataAtualizacao).toLocaleDateString('pt-BR');
        }
        return funcionario;
      })
      this.funcionarios = data;
      this.funcionariosGeral = data;
      // console.log(data);
    });
  }

  search($event: KeyboardEvent) {
    const value = ($event.target as HTMLInputElement).value.toLowerCase();
    this.funcionarios = this.funcionariosGeral.filter(funcionario => funcionario.nome.toLowerCase().includes(value));
  }

}
