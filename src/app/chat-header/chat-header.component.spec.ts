import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHeaderComponent } from './chat-header.component';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { FakeTranslateLoader } from '../avatar/mocks/fake-translate-loader';

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHeaderComponent],
      providers: [provideTranslateService({
        loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
