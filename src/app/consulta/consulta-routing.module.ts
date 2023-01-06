import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: '', component: ConsultaComponent },
  { path: 'cadastro', component: CadastroFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaRoutingModule {}
