import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from './../model/usuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  data!: Usuario;

  ngOnInit(): void {
    this.data = new Usuario();
  }
  salvar(form: NgForm) {
    if (form.valid) {
      this.usuarioService.salvar(this.data);
    }
  }
}
