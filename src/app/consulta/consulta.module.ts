import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesModule } from '../messages/messages.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [ConsultaComponent, CadastroFormComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
  ],
})
export class ConsultaModule {}
