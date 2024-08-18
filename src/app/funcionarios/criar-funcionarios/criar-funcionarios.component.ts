import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-criar-funcionarios',
  templateUrl: './criar-funcionarios.component.html',
  styleUrls: ['./criar-funcionarios.component.css']
})
export class CriarFuncionariosComponent implements OnInit {
  
  btnAction = 'Cadastrar';
  btnTitle = 'Cadastrar Funcionário';

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }
  
  ngOnInit(): void {
  
  }
  
  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.addFuncionario(funcionario).subscribe(() => {
      // console.log('Funcionário criado com sucesso');
      this.router.navigate(['/funcionarios']);
    });
  }
}
