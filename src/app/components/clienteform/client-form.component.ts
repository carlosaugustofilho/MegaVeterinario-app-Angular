import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
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
    // Log estado dos controles do formulário
    console.log('Estado dos controles do formulário:');
    Object.keys(this.clientForm.controls).forEach(key => {
      const control = this.clientForm.get(key);
      console.log(`${key}:`, control?.value, control?.status, control?.errors);
    });
    const enderecoGroup = this.clientForm.get('endereco') as FormGroup;
    Object.keys(enderecoGroup.controls).forEach(key => {
      const control = enderecoGroup.get(key);
      console.log(`endereco.${key}:`, control?.value, control?.status, control?.errors);
    });

    if (this.clientForm.valid) {
      console.log('Formulário é válido. Enviando dados...', this.clientForm.value);
      this.spinner.show();
      this.clientService.criarCliente(this.clientForm.value).subscribe(
        response => {
          console.log('Resposta da API:', response);

          this.toastr.success('Cliente criado com sucesso!');
          this.clientForm.reset();
        },
        error => {
          console.error('Erro ao criar cliente:', error);
          this.toastr.error('Erro ao criar cliente', error);
        }
      ).add(() => {
        console.log('Finalizando requisição...');
        this.spinner.hide();
      });
    } else {
      console.warn('Formulário inválido. Por favor, preencha todos os campos obrigatórios.', this.clientForm);
      this.toastr.error('Formulário inválido. Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
