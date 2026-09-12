import { Component } from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { ChatContentComponent } from '../chat-content/chat-content.component';
import { ChatFooterComponent } from '../chat-footer/chat-footer.component';

@Component({
  selector: 'app-conversation',
  imports: [ChatHeaderComponent, ChatContentComponent, ChatFooterComponent],
  templateUrl: './conversation.component.html'
})
export class ConversationComponent {

}
