import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionariosComponent } from './funcionarios/criar-funcionarios/criar-funcionarios.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarFuncionariosComponent } from './funcionarios/editar-funcionarios/editar-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarFuncionariosComponent,
    CriarFuncionariosComponent,
    FuncionarioFormComponent,
    EditarFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
