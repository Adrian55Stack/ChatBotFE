import { Component, input } from '@angular/core';
import { IMessage } from '../models/message.model';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { DatePipe } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-message',
  imports: [DatePipe, AvatarComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message = input.required<IMessage>();

  parseMarkdown(msg: string): string {
    const html = (marked(msg) as string).replace('<p','<p class="mb-0"');
    return DOMPurify.sanitize(html);
  }
}
