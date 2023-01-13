import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  imports: [CommonModule, MessagesRoutingModule, AppMaterialModule],
})
export class MessagesModule {}
