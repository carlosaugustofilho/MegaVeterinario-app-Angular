import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../model/funcionario.model';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.loadFuncionarios();
  }

  loadFuncionarios(): void {
    this.funcionarioService.buscarTodosFuncionarios().subscribe(
      (response: Funcionario[]) => {
        this.funcionarios = response;
      },
      (error: any) => {
        console.error('Erro ao buscar funcionários', error);
      }
    );
  }

  alterarStatus(funcionario: Funcionario): void {
    const novoStatus = !funcionario.ativo;
    this.funcionarioService.alterarStatusFuncionario(funcionario.id!, novoStatus).subscribe(
      (response: Funcionario) => {
        funcionario.ativo = novoStatus;
      },
      (error: any) => {
        console.error('Erro ao alterar status do funcionário', error);
      }
    );
  }
}
