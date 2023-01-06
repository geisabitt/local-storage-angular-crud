export interface Usuario {
  data: [
    dados_pessoais: [
      {
        id: string;
        nome: string;
        sobrenome: string;
        cpf: number;
        data_nascimento: string;
      }
    ],
    endereco: [
      {
        cep: number;
        endereco: string;
        numero: string;
        complemento: string;
        cidade: string;
        estado: string;
      }
    ]
  ];
}
