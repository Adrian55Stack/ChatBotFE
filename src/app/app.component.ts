import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConversationComponent } from "./conversation/conversation.component";

@Component({
  selector: 'app-root',
  imports: [ConversationComponent, MatCardModule, MatSidenavModule, ConversationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatBotRxjs';
}
