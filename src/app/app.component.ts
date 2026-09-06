import { Component } from '@angular/core';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [ChatHeaderComponent, ChatContentComponent, ChatFooterComponent, MatCardModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatBotRxjs';
}
