import { Component } from '@angular/core';

import { LerUsuario } from '../model/lerUsuario';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent {
  lerUsuario: LerUsuario[] = [];
  displayedColumns = ['nome', 'cpf', 'data_nascimento', 'endereco'];
  constructor() {}
}
