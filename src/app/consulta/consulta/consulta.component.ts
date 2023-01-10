import { Component } from '@angular/core';

import { LerUsuario } from './../model/lerUsuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent {
  lerUsuarios: LerUsuario[] = [];
  displayedColumns = ['nome', 'cpf', 'data_nascimento', 'endereco'];
  constructor(private usuarioService: UsuarioService) {
    this.lerUsuarios = this.usuarioService.consultar();
  }
}
