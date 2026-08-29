import { TestBed } from '@angular/core/testing';

import { CoreMessageService } from './core-message.service';
import { IMessage } from '../models/message.model';

describe('CoreMessageService', () => {
  let service: CoreMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the given value on inProgress when setInProgress is called', done => {
    service.setInProgress(true);

    service['inProgress'].subscribe(value => {
      expect(value).toBe(true);
      done();
    });
  });

  it('should return the current number of messages', () => {
    const message: IMessage = { author: 'User', content: 'Hello' } as IMessage;
    service['messages$'].next([message]);

    const result = service.getNumberOfMessages();

    expect(result).toBe(1);
  });

  it('should append the new message to the existing messages list', () => {
    const existing: IMessage = { author: 'User', content: 'Hi' } as IMessage;
    const newMessage: IMessage = { author: 'AI', content: 'Hello back' } as IMessage;
    service['messages$'].next([existing]);

    service.add(newMessage);

    expect(service['messages$'].getValue()).toEqual([existing, newMessage]);
  });
});
