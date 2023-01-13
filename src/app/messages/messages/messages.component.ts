import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  faTimes = faTimes;
  constructor(public messagesService: MessagesService) {}
  limpar() {
    this.messagesService.add('');
  }
}
