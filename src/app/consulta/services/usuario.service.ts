import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}
  salvar(usuario: Usuario) {
    localStorage.setItem(usuario.cpf, JSON.stringify(usuario));
  }
}
