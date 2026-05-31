import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, Subject } from 'rxjs';
import { IMessage } from '../models/message.model';
import { CoreMessageService } from './core-message.service';

@Injectable({
  providedIn: 'root'
})
export class BotService {
  coreMessagesService = inject(CoreMessageService);

  private readonly botAvailabilityDelay = 1000;
  private readonly botIsTypingDelay = 2000;
  private readonly replyDelay = 3000;

  private readonly availability: Subject<boolean> = new Subject();
  private readonly isTyping: Subject<boolean> = new Subject();

  private botStream: Observable<IMessage>;

  constructor() {
    this.defineBotStream();
    this.listenToBotIsTypingChanges();
  }

  listenToBotIsTypingChanges() {
    this.coreMessagesService.getMessage().pipe(
      delay(this.botIsTypingDelay)
    ).subscribe(() => this.isTyping.next(true));
    
    this.botStream.subscribe(() => {
      this.isTyping.next(false);
    });
  }

  private defineBotStream() {
    this.botStream = this.coreMessagesService.getMessage().pipe(
      delay(this.replyDelay),
      map(() => <IMessage>({
        id: Date.now(),
        author: 'bot',
        content: `Hello`,
        time: new Date()
      }))
    );
  }

  getBotStream() {
    return this.botStream;
  }

  getBotIsTyping() : Observable<boolean> {
    return this.isTyping.asObservable();
  }
}
