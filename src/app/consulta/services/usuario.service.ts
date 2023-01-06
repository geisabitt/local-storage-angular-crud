import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API = 'http://localhost:5000/data';

  constructor(private httpClient: HttpClient) {}
  listaUsuario() {
    return this.httpClient.get<Usuario[]>(this.API);
  }
}
