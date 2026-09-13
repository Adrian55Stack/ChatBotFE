import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectorComponent } from './theme-selector.component';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { FakeTranslateLoader } from '../../mocks/fake-translate-loader';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
      providers: [provideTranslateService({
        loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
