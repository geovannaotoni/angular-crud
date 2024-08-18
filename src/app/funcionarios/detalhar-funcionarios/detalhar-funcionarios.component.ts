import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhar-funcionarios',
  templateUrl: './detalhar-funcionarios.component.html',
  styleUrls: ['./detalhar-funcionarios.component.css']
})
export class DetalharFuncionariosComponent implements OnInit {

  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(Number(id)).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }

  getDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  mudarSituacaoFuncionario() {
    this.funcionarioService.changeSituationFuncionario(this.funcionario).subscribe();
    this.router.navigate(['/funcionarios']);
  }

}
