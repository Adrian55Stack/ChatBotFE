import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';
import { Theme } from '../../models/theme.model';
import { Mythology } from '../../constants/mythology.constant';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule, TranslatePipe, MatTooltipModule, FormsModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  private readonly themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;
  size = 40;

  themes: Theme[] = [
    { value: Mythology.Egypt, label: 'sidEgyptianTheme', source: 'theme-symbols/egypt.png' },
    { value: Mythology.Norse, label: 'sidNorseTheme', source: 'theme-symbols/norse.png'},
    { value: Mythology.Greek, label: 'sidGreekTheme', source: 'theme-symbols/greek.png'}];

  selectTheme(event: MatButtonToggleChange) {
    this.themeService.setTheme(event.value);
  }
}
