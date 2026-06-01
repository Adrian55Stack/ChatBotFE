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
import { IMessage } from '../models/message.model';

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
    const userMessage: IMessage = {
      id: 2,
      author: 'User',
      content: this.input.value,
      time: new Date()
    };

    this.coreMessageService.add(userMessage);

    this.conversationService.getAiResponse(this.input.value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(resp => {
      const aiMessage: IMessage = {
        id: 1,
        author: 'AI',
        content: resp.response,
        time: new Date()
      };
      this.coreMessageService.add(aiMessage);
    });
    this.input.reset();
    this.isDisabled$.next(true);
  }
}
