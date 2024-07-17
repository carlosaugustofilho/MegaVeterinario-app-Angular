import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/clienteform/client-form.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioDetailComponent } from './components/funcionario-detail/funcionario-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrocliente', component: ClientFormComponent },
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/cadastrar', component: FuncionarioFormComponent },
  { path: 'funcionarios/:id', component: FuncionarioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
