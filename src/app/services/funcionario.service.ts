import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../components/model/funcionario.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `${environment.production}/funcionarios`;

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.apiUrl}/CadastrarFuncionario`, funcionario);
  }

  buscarFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/${id}`);
  }

  atualizarFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${id}`, funcionario);
  }

  alterarStatusFuncionario(id: number, ativo: boolean): Observable<Funcionario> {
    const params = new HttpParams().set('ativo', ativo.toString());
    return this.http.post<Funcionario>(`${this.apiUrl}/AlterarStatusFuncionario/${id}`, null, { params });
  }

  buscarTodosFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.apiUrl}`);
  }
}
