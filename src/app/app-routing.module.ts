import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionariosComponent } from './funcionarios/criar-funcionarios/criar-funcionarios.component';

const routes: Routes = [
  {
    path: 'funcionarios',
    component: ListarFuncionariosComponent
  },
  {
    path: 'cadastro',
    component: CriarFuncionariosComponent
  },
  {
    path: '',
    redirectTo: 'funcionarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
