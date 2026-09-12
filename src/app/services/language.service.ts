import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Language } from '../models/language.model';
import { LANGUAGE_NAMES } from '../constants/languages.constant';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly http = inject(HttpClient);
  private readonly flagsPath = 'flags/';
  private readonly flagsFormat = '.jpg';

  getLanguages(): Observable<Language[]> {
    return this.http.get<string[]>('i18n/manifest.json').pipe(
      map((codes) =>
        codes.map((code, index) => ({
          id: index + 1,
          src: `${this.flagsPath}${code}${this.flagsFormat}`,
          label: `sid${LANGUAGE_NAMES[code] ?? code}`,
          value: code,
        }))
      )
    );
  }
}
