import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContentComponent } from './chat-content.component';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { FakeTranslateLoader } from '../avatar/mocks/fake-translate-loader';


describe('ChatContentComponent', () => {
  let component: ChatContentComponent;
  let fixture: ComponentFixture<ChatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatContentComponent],
      providers: [provideTranslateService({
        loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service methods on init', () => {
    component.ngOnInit();

    expect(component.botIsTyping).toBeDefined();
    expect(component.messages).toBeDefined();
  });
});
