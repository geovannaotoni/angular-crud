import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})
export class EditarFuncionariosComponent implements OnInit {

  btnAction = 'Editar';
  btnTitle = 'Editar Funcionário';
  funcionario!: Funcionario;
  
  constructor(
    private funcionarioService: FuncionarioService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(Number(id)).subscribe(funcionario => {
      // console.log(funcionario);
      this.funcionario = funcionario;
    });
  }
  
  editFuncionario($event: Funcionario) {
    this.funcionarioService.updateFuncionario($event).subscribe();
    this.router.navigate(['/funcionarios']);
  }
}
