import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss',
  imports: [TranslatePipe]
})
export class ChatHeaderComponent {
  private readonly translate: TranslateService = inject(TranslateService);
  appTitle = 'SeshatAI';
  subtitle = 'Ancient stories. Modern answers.';
  constructor() {
    this.translate.use('zh');
  }
}
