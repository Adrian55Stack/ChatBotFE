// theme.service.ts
import { Injectable, signal, effect } from '@angular/core';
import { Mythology } from '../constants/mythology.constant';


@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'seshat-theme';
  theme = signal<Mythology>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const value = this.theme();
      document.documentElement.setAttribute('data-theme', value);
      localStorage.setItem(this.storageKey, value);
    });
  }

  setTheme(theme: Mythology): void {
    this.theme.set(theme);
  }

  private getInitialTheme(): Mythology {
    const saved = localStorage.getItem(this.storageKey) as Mythology | null;
    return saved ?? Mythology.Egypt;
  }
}