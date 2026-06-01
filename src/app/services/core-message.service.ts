import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class CoreMessageService {
  private readonly messages$ = new BehaviorSubject<IMessage[]>([]);

  getMessages(): BehaviorSubject<IMessage[]> {
    return this.messages$;
  }

  add(message: IMessage): void {
    const current = this.messages$.getValue();
    this.messages$.next([...current, message]);
  }
}
