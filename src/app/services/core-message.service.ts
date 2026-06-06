import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class CoreMessageService {
  private readonly messages$ = new BehaviorSubject<IMessage[]>([]);
  private readonly inProgress = new BehaviorSubject<boolean>(false);

  getInProgress() {
    return this.inProgress.asObservable();
  }

  setInProgress(value: boolean) {
    this.inProgress.next(value);
  }

  getNumberOfMessages(): number {
    return this.messages$.getValue()?.length;
  }

  getMessages(): BehaviorSubject<IMessage[]> {
    return this.messages$;
  }

  add(message: IMessage): void {
    const current = this.messages$.getValue();
    this.messages$.next([...current, message]);
  }
}
