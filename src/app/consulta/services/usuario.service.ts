import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LerUsuario } from '../model/lerUsuario';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  salvar(usuario: Usuario) {
    const data = {
      data: {
        dados_pessoais: {
          nome: usuario.nome,
          sobrenome: usuario.sobrenome,
          data_nascimento: usuario.data_nascimento,
          cpf: usuario.cpf,
        },
        endereco: {
          cep: usuario.cep,
          endereco: usuario.endereco,
          numero: usuario.numero,
          complemento: usuario.complemento,
          cidade: usuario.cidade,
          estado: usuario.estado,
        },
      },
    };
    localStorage.setItem(usuario.cpf.toString(), JSON.stringify(data));

    return data;
  }

  consultar(): Array<LerUsuario> {
    let usuarios: LerUsuario[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return usuarios;
  }
}
