import { Component } from '@angular/core';

import { Usuario } from '../model/usuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent {
  usuario: Usuario[] = [];
  displayedColumns = ['nome', 'cpf', 'data_nascimento', 'endereco'];
  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.consultarFuncinando();
  }
}
