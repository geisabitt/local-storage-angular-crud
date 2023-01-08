export interface Usuario {
  nome: string;
  sobrenome: string;
  cpf: number;
  data_nascimento: string;
  cep: number;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  estado: string;
}

/*
data: [
    dados_pessoais: {
      nome: string;
      sobrenome: string;
      cpf: number;
      data_nascimento: string;
    },
    endereco: {
      cep: number;
      endereco: string;
      numero: string;
      complemento: string;
      cidade: string;
      estado: string;
    }
  ];
}
*/
