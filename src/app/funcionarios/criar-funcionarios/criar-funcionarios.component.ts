import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-criar-funcionarios',
  templateUrl: './criar-funcionarios.component.html',
  styleUrls: ['./criar-funcionarios.component.css']
})
export class CriarFuncionariosComponent implements OnInit {
  
  constructor(private funcionarioService: FuncionarioService) { }
  
  ngOnInit(): void {
  
  }
  
  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.addFuncionario(funcionario).subscribe(() => {
      // console.log('Funcionário criado com sucesso');
    });
  }
}
