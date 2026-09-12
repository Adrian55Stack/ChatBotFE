import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { LanguageService } from './language.service';
import { LANGUAGE_NAMES } from '../constants/languages.constant';

describe('LanguageService', () => {
  let service: LanguageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(LanguageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetches the manifest and maps codes into Language objects', (done) => {
    const mockCodes = ['en', 'fr', 'zh'];

    service.getLanguages().subscribe((languages) => {
      expect(languages).toEqual([
        { id: 1, src: 'flags/en.jpg', label: `sid${LANGUAGE_NAMES['en']}`, value: 'en' },
        { id: 2, src: 'flags/fr.jpg', label: `sid${LANGUAGE_NAMES['fr']}`, value: 'fr' },
        { id: 3, src: 'flags/zh.jpg', label: `sid${LANGUAGE_NAMES['zh']}`, value: 'zh' },
      ]);
      done();
    });

    const req = httpMock.expectOne('i18n/manifest.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockCodes);
  });

  it('falls back to the raw code as label when LANGUAGE_NAMES has no entry', (done) => {
    const mockCodes = ['xx'];

    service.getLanguages().subscribe((languages) => {
      expect(languages).toEqual([
        { id: 1, src: 'flags/xx.jpg', label: 'sidxx', value: 'xx' },
      ]);
      done();
    });

    const req = httpMock.expectOne('i18n/manifest.json');
    req.flush(mockCodes);
  });

  it('returns an empty array when the manifest is empty', (done) => {
    service.getLanguages().subscribe((languages) => {
      expect(languages).toEqual([]);
      done();
    });

    const req = httpMock.expectOne('i18n/manifest.json');
    req.flush([]);
  });
});