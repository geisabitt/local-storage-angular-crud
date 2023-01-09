import { Injectable } from '@angular/core';

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
  }

  /*estruturardado(usuarioEstruturado: Usuario){
     const data ={
      dados_pessoais:{
        nome: usuarioEstruturado.nome,
        sobrenome: usuarioEstruturado.sobrenome,
        data_nascimento: usuarioEstruturado.data_nascimento,
        cpf: usuarioEstruturado.cpf
      },
      endereco:{
        cep: usuarioEstruturado.cep,
        endereco: usuarioEstruturado.endereco,
        numero: usuarioEstruturado.numero,
        complemento: usuarioEstruturado.complemento,
        cidade: usuarioEstruturado.cidade,
        estado: usuarioEstruturado.estado
      }
     }
     return data
  }

  objNovoEstruturado = .this.estruturardado(: Array<any>): Array<any> {}
enviarParaOLocalStorage(objNovoEstruturado){

}*/

  consultar(): Array<Usuario> {
    let usuarios: Usuario[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return usuarios;
  }
}
