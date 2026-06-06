import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IMessage } from '../models/message.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CoreMessageService } from '../services/core-message.service';

@Component({
  selector: 'app-chat-content',
  imports: [MatExpansionModule, AsyncPipe, DatePipe],
  templateUrl: './chat-content.component.html',
  styleUrl: './chat-content.component.scss'
})
export class ChatContentComponent implements OnInit {
  coreMessageService = inject(CoreMessageService);

  messages: Observable<IMessage[]>;
  botIsTyping: Observable<boolean>;

  ngOnInit(): void {
    this.messages = this.coreMessageService.getMessages();
    this.botIsTyping = this.coreMessageService.getInProgress();
  }
}
