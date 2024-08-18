import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionariosComponent } from './funcionarios/criar-funcionarios/criar-funcionarios.component';
import { EditarFuncionariosComponent } from './funcionarios/editar-funcionarios/editar-funcionarios.component';

const routes: Routes = [
  {
    path: 'funcionarios',
    component: ListarFuncionariosComponent
  },
  {
    path: 'cadastrar',
    component: CriarFuncionariosComponent
  },
  {
    path: '',
    redirectTo: 'funcionarios',
    pathMatch: 'full'
  },
  {
    path: 'editar/:id',
    component: EditarFuncionariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
