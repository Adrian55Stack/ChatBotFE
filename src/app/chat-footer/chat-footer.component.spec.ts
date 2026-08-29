import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CoreMessageService } from '../services/core-message.service'; // update path
import { ConversationService } from '../services/conversation.service'; // update path
import { ChatFooterComponent } from './chat-footer.component';

describe('ChatFooterComponent', () => {
  let component: ChatFooterComponent;
  let fixture: ComponentFixture<ChatFooterComponent>;
  let coreMessageServiceSpy: {
    setInProgress: jest.Mock;
    getNumberOfMessages: jest.Mock;
    add: jest.Mock;
  };
  let conversationServiceSpy: {
    getAiResponse: jest.Mock;
  };

  beforeEach(async () => {
    coreMessageServiceSpy = {
      setInProgress: jest.fn(),
      getNumberOfMessages: jest.fn().mockReturnValue(0),
      add: jest.fn(),
    };

    conversationServiceSpy = {
      getAiResponse: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ChatFooterComponent],
      providers: [
        { provide: CoreMessageService, useValue: coreMessageServiceSpy },
        { provide: ConversationService, useValue: conversationServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the AI response and set progress to false', () => {
    conversationServiceSpy.getAiResponse.mockReturnValue(of({ answer: 'AI reply' }));
    component.input.setValue('Hello there');

    component.sendMessage();

    expect(conversationServiceSpy.getAiResponse).toHaveBeenCalledWith('Hello there');
    expect(coreMessageServiceSpy.setInProgress).toHaveBeenCalledWith(false);
  });

  it('should set isDisabled$ to true after sending', () => {
    conversationServiceSpy.getAiResponse.mockReturnValue(of({ answer: 'AI reply' }));
    component.input.setValue('Hello there');

    let isDisabledValue: boolean | undefined;
    component.isDisabled$.subscribe(v => (isDisabledValue = v));

    component.sendMessage();

    expect(isDisabledValue).toBe(true);
  });
});