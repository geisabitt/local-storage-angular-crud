import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}
  salvar(usuario: Usuario) {
    localStorage.setItem(usuario.cpf.toString(), JSON.stringify(usuario));
  }
  consultar(): Array<Usuario> {
    let usuarios: Usuario[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return usuarios;
  }
}
