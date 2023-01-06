import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      data_nascimento: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
    });
  }
  get nome() {
    return this.form.get('nome')!;
  }
  get sobrenome() {
    return this.form.get('sobrenome')!;
  }
  get cpf() {
    return this.form.get('cpf')!;
  }
  get data_nascimento() {
    return this.form.get('data_nascimento')!;
  }
  get cep() {
    return this.form.get('cep')!;
  }
  get endereco() {
    return this.form.get('endereco')!;
  }
  get numero() {
    return this.form.get('numero')!;
  }
  get complemento() {
    return this.form.get('complemento')!;
  }
  get cidade() {
    return this.form.get('cidade')!;
  }
  get estado() {
    return this.form.get('estado')!;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}

/*
  }
   async criarJson(usuario:Usuario){
    const formData = FormData();
    formData.append('nome', usuario.[(this.nome)])
    formData.append('sobrenome', usuario.(this.sobrenome))
    formData.append('nome', usuario.(this.nome))
    formData.append('nome', usuario.(this.nome))
    formData.append('nome', usuario.(this.nome))
  }
  //async enviarBanco() {
   // await this.usuario.criarUsuario()
  //}


*/
