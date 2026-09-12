import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';
import { Theme } from '../../models/theme.model';
import { Mythology } from '../../constants/mythology.constant';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule, TranslatePipe],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  private readonly themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;

  themes: Theme[] = [
    { value: Mythology.Egypt, label: 'sidEgyptianTheme' },
    { value: Mythology.Norse, label: 'sidNorseTheme'},
    { value: Mythology.Greek, label: 'sidGreekTheme'}];

  selectTheme(event: MatButtonToggleChange) {
    this.themeService.setTheme(event.value);
  }
}
