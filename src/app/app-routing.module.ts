import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/clienteform/client-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastrocliente', pathMatch: 'full' },
  { path: 'cadastrocliente', component: ClientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
