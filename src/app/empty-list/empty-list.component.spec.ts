import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyListComponent } from './empty-list.component';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { FakeTranslateLoader } from '../avatar/mocks/fake-translate-loader';

describe('EmptyListComponent', () => {
  let component: EmptyListComponent;
  let fixture: ComponentFixture<EmptyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyListComponent],
      providers: [provideTranslateService({
        loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
