import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IMessage } from '../models/message.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CoreMessageService } from '../services/core-message.service';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { TypingInProgressComponent } from "../typing-in-progress/typing-in-progress.component";
import { AvatarComponent } from '../avatar/avatar.component';
import { EmptyListComponent } from "../empty-list/empty-list.component";

@Component({
  selector: 'app-chat-content',
  imports: [MatExpansionModule, AsyncPipe, DatePipe, TypingInProgressComponent, AvatarComponent, EmptyListComponent],
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

  parseMarkdown(msg: string): string {
      const html = (marked(msg) as string).replace('<p','<p class="mb-0"');
      return DOMPurify.sanitize(html);
  }
}
