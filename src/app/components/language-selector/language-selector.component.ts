import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlagIconComponent } from "../flag-icon/flag-icon.component";

@Component({
  selector: 'app-language-selector',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, FlagIconComponent],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {

  languages = [
    { id: 1, src: 'flags/en.jpg', label: 'English', value: 'en' },
    { id: 2, src: 'flags/fr.jpg', label: 'French', value: 'fr' },
    { id: 3, src: 'flags/zh.jpg', label: 'Chinese', value: 'zh' },
    { id: 4, src: 'flags/es.jpg', label: 'Spanish', value: 'es' },
    { id: 5, src: 'flags/ar.jpg', label: 'Arabic', value: 'ar' },
    { id: 6, src: 'flags/ru.jpg', label: 'Russian', value: 'ru' },
    { id: 7, src: 'flags/ja.jpg', label: 'Japanese', value: 'ja' },
    { id: 8, src: 'flags/it.jpg', label: 'Italian', value: 'it' },
    { id: 9, src: 'flags/pl.jpg', label: 'Polish', value: 'pl' },
    { id: 10, src: 'flags/ro.jpg', label: 'Romanian', value: 'ro' },
  ];

  selectedLanguage = this.languages[0];

}
