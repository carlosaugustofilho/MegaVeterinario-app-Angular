export interface Cliente {
  nome: string;
  sobrenome: string;
  telefone: string;
  dataNascimento: string;
  cpf: string;
  email: string;
  endereco: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}
