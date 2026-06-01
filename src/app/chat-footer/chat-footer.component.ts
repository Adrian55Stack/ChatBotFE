import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CoreMessageService } from '../services/core-message.service';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ConversationService } from '../services/conversation.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { IMessage, Message } from '../models/message.model';

@Component({
  selector: 'app-chat-footer',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './chat-footer.component.html',
  styleUrl: './chat-footer.component.scss'
})
export class ChatFooterComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  conversationService = inject(ConversationService);
  coreMessageService = inject(CoreMessageService);

  input: FormControl = new FormControl();

  isDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  ngOnInit(): void {
    this.listenToValueChanges();
  }

  listenToValueChanges() {
    this.input.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(val => {
      this.isDisabled$.next(!val);
    });
  }

  sendMessage() {
    this.coreMessageService.setInProgress(true);
    const userMessage: IMessage = new Message(this.coreMessageService.getNumberOfMessages() + 1, 'User', this.input.value);

    this.coreMessageService.add(userMessage);

    this.conversationService.getAiResponse(this.input.value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(resp => {
      const aiMessage: IMessage = new Message(this.coreMessageService.getNumberOfMessages() + 1, 'AI', resp.response);
      this.coreMessageService.add(aiMessage);
      this.coreMessageService.setInProgress(false);
    });
    this.input.reset();
    this.isDisabled$.next(true);
  }
}
