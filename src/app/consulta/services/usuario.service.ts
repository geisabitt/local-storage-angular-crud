import { Injectable } from '@angular/core';

import { LerUsuario } from '../model/lerUsuario';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  salvar(usuario: Usuario) {
    const data = {
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
    };
    localStorage.setItem(usuario.cpf.toString(), JSON.stringify(data));
    return data;
  }

  //consulta dos dados que está funcionando quando os itens estão em linha e não sao objetos complexos
  consultarFuncinando(): Array<Usuario> {
    let usuarios: Usuario[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return usuarios;
  }
  // Final da consulta que está funcionando

  salvar2(usuario: Usuario) {
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

  consultarTeste4(): Array<LerUsuario> {
    let usuarios: LerUsuario[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return usuarios;
  }

  consultarTeste3() {
    let myDate = localStorage.getItem('dados_pessoais_endereco');
    myDate = JSON.parse(myDate!);
    return myDate;
  }

  consultarTeste2() {
    let myDate = localStorage.getItem('dados_pessoais_endereco');
    myDate = JSON.parse(myDate!);
    return myDate;
  }

  consultarTeste1() {
    const getDadosPessoais = JSON.parse(
      localStorage.getItem('dados_pessoais')!
    );
    const getEndereco = JSON.parse(localStorage.getItem('endereco')!);

    let dataResgate = { getDadosPessoais, getEndereco };

    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      dataResgate.getDadosPessoais.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)!)!)
      );
      dataResgate.getEndereco.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)!)!)
      );
    }
    return getDadosPessoais && getEndereco;
  }
}
