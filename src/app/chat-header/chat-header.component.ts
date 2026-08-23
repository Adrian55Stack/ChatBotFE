import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss'
})
export class ChatHeaderComponent {
  appTitle = 'SeshatAI';
  subtitle = 'Ancient stories. Modern answers.';
}
