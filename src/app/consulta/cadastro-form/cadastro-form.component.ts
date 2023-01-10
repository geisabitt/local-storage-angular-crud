import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LerUsuario } from './../model/lerUsuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  formulario: FormGroup;
  data!: LerUsuario;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      data_nascimento: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.maxLength(8)]],
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  //data!: Usuario;

  ngOnInit(): void {
    //this.data = new Usuario();
  }
  /*salvar(form: NgForm) {
    if (form.valid) {
      this.usuarioService.salvar(this.data);
    }
  }*/

  onSubmit() {
    if (this.formulario.valid) {
      this.usuarioService.salvar2(this.formulario.value);
    }
    console.log(this.formulario.value);
  }
}
