export interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  paisId: number;
}

export interface Cliente {
  id?: number;
  nome: string;
  telefone: string;
  dataNascimento: string;
  cpf: string;
  email: string;
  endereco: Endereco;
}
