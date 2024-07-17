import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  funcionarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Inicializando funcionarioForm como um FormGroup vazio
    this.funcionarioForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.funcionarioForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      cargo: ['', Validators.required],
      dataContratacao: ['', Validators.required],
      salario: [''],
      beneficios: [''],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.funcionarioForm.valid) {
      this.funcionarioService.cadastrarFuncionario(this.funcionarioForm.value).subscribe(
        response => {
          this.toastr.success('Funcionário cadastrado com sucesso!');
          this.router.navigate(['/funcionarios']);
        },
        error => {
          this.toastr.error('Erro ao cadastrar funcionário');
          console.error(error);
        }
      );
    } else {
      this.toastr.error('Preencha todos os campos obrigatórios');
    }
  }
}
