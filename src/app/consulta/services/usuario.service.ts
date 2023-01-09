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

  consultar(resgateUsuario: Usuario): Array<Usuario> {
    let dataResgate = {
      dados_pessoais: {
        nome: resgateUsuario.nome,
        sobrenome: resgateUsuario.sobrenome,
        data_nascimento: resgateUsuario.data_nascimento,
        cpf: resgateUsuario.cpf,
      },
      endereco: {
        cep: resgateUsuario.cep,
        endereco: resgateUsuario.endereco,
        numero: resgateUsuario.numero,
        complemento: resgateUsuario.complemento,
        cidade: resgateUsuario.cidade,
        estado: resgateUsuario.estado,
      },
    };
    let dataResgateObjeto = JSON.parse(dataResgate);
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      dataResgate.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return dataResgate;
  }
  resgatar() {
    const dataResgate = JSON.parse(this.consultar);
    return dataResgate;
  }
}
