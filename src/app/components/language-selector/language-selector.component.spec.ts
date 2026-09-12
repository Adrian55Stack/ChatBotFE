import { TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { LanguageSelectorComponent } from './language-selector.component';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/language.model';
import { MatSelectChange } from '@angular/material/select';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let languageServiceMock: { getLanguages: jest.Mock };
  let translateServiceMock: { use: jest.Mock };

  const mockLanguages: Language[] = [
    { id: 1, src: 'flags/en.jpg', label: 'sidEnglish', value: 'en' },
    { id: 2, src: 'flags/fr.jpg', label: 'sidFrench', value: 'fr' },
    { id: 3, src: 'flags/zh.jpg', label: 'sidChinese', value: 'zh' },
  ];

  beforeEach(() => {
    languageServiceMock = {
      getLanguages: jest.fn().mockReturnValue(of(mockLanguages)),
    };
    translateServiceMock = {
      use: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [LanguageSelectorComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceMock },
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    })
      .overrideComponent(LanguageSelectorComponent, { set: { template: '' } });

    const fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ngOnInit', () => {
    it('loads languages from LanguageService', () => {
      component.ngOnInit();

      expect(languageServiceMock.getLanguages).toHaveBeenCalled();
      expect(component.languages).toEqual(mockLanguages);
    });

    it('defaults selectedLanguage to the entry with value "en"', () => {
      component.ngOnInit();

      expect(component.selectedLanguage).toEqual(
        mockLanguages.find((l) => l.value === 'en')
      );
    });

    it('sets selectedLanguage to undefined if no "en" entry exists', () => {
      const noEnglish = mockLanguages.filter((l) => l.value !== 'en');
      languageServiceMock.getLanguages.mockReturnValue(of(noEnglish));

      component.ngOnInit();

      expect(component.selectedLanguage).toBeUndefined();
    });

    it('unsubscribes when the component is destroyed (takeUntilDestroyed)', () => {
      const languages$ = new Subject<Language[]>();
      languageServiceMock.getLanguages.mockReturnValue(languages$);

      const fixture = TestBed.createComponent(LanguageSelectorComponent);
      const instance = fixture.componentInstance;
      instance.ngOnInit();

      fixture.destroy();
      languages$.next(mockLanguages);

      expect(instance.languages).toBeUndefined();
    });
  });

  describe('updateLanguage', () => {
    it('calls translateService.use with the selected language value', () => {
      const event = { value: { id: 2, src: 'flags/fr.jpg', label: 'sidFrench', value: 'fr' } } as MatSelectChange;

      component.updateLanguage(event);

      expect(translateServiceMock.use).toHaveBeenCalledWith('fr');
      expect(translateServiceMock.use).toHaveBeenCalledTimes(1);
    });

    it('calls translateService.use with a different language value', () => {
      const event = { value: { id: 3, src: 'flags/zh.jpg', label: 'sidChinese', value: 'zh' } } as MatSelectChange;

      component.updateLanguage(event);

      expect(translateServiceMock.use).toHaveBeenCalledWith('zh');
    });
  });
});