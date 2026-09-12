import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { provideHttpClient } from '@angular/common/http';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
