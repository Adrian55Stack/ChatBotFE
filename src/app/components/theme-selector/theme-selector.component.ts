import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  private readonly themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;

  selectTheme(event
    // : Mythology
  ) {
    this.themeService.setTheme(event.value);
  }
}
