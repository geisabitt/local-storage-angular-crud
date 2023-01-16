import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessagesService } from '../../messages/services/messages.service';
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
    private usuarioService: UsuarioService,
    private messagesService: MessagesService
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      data_nascimento: ['', Validators.required],
      cep: ['', [Validators.required, Validators.maxLength(8)]],
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formulario.invalid) {
      this.messagesService.add(
        `Confira se preencheu todos os dados de forma correta. -- Os campos marcados de vermelho não estão preenchidos corretamente.`
      );
      return;
    } else {
      this.usuarioService.salvar(this.formulario.value);
      this.formulario.reset();
      this.messagesService.add('Dados cadastrados com sucesso.');
    }
  }
}
