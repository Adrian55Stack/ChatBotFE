import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConversationComponent } from "./conversation/conversation.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@Component({
  selector: 'app-root',
  imports: [ConversationComponent, MatCardModule, MatSidenavModule, ConversationComponent, MatIconModule, MatButtonModule, LanguageSelectorComponent, ThemeSelectorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatBotRxjs';
}
