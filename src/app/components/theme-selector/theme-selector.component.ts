import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';
import { Theme } from '../../models/theme.model';
import { Mythology } from '../../constants/mythology.constant';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  private readonly themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;

  themes: Theme[] = [
    { value: Mythology.Egypt, label: 'Egyptian' },
    { value: Mythology.Norse, label: 'Norse'},
    { value: Mythology.Greek, label: 'Greek'}];

  selectTheme(event: MatButtonToggleChange) {
    this.themeService.setTheme(event.value);
  }
}
