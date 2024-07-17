export interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface Funcionario {
  id?: number;
  nome: string;
  senha: string;
  email: string;
  cargo: string;
  dataContratacao: Date;
  salario?: number;
  beneficios?: string;
  endereco: Endereco;
  ativo?: boolean;
}
