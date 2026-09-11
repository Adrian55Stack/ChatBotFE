import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FlagIconComponent } from "../flag-icon/flag-icon.component";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, FlagIconComponent, TranslatePipe],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {
  private readonly translateService = inject(TranslateService);

  flagsPath = 'flags/';
  flagsFormat = '.jpg';

  languages = [
    { id: 1, src: `${this.flagsPath}en${this.flagsFormat}`, label: 'sidEnglish', value: 'en' },
    { id: 2, src: `${this.flagsPath}fr${this.flagsFormat}`, label: 'sidFrench', value: 'fr' },
    { id: 3, src: `${this.flagsPath}zh${this.flagsFormat}`, label: 'sidChinese', value: 'zh' },
    { id: 4, src: `${this.flagsPath}es${this.flagsFormat}`, label: 'sidSpanish', value: 'es' },
    { id: 5, src: `${this.flagsPath}ar${this.flagsFormat}`, label: 'sidArabic', value: 'ar' },
    { id: 6, src: `${this.flagsPath}ru${this.flagsFormat}`, label: 'sidRussian', value: 'ru' },
    { id: 7, src: `${this.flagsPath}ja${this.flagsFormat}`, label: 'sidJapanese', value: 'ja' },
    { id: 8, src: `${this.flagsPath}it${this.flagsFormat}`, label: 'sidItalian', value: 'it' },
    { id: 9, src: `${this.flagsPath}pl${this.flagsFormat}`, label: 'sidPolish', value: 'pl' },
    { id: 10, src: `${this.flagsPath}ro${this.flagsFormat}`, label: 'sidRomanian', value: 'ro' }
  ];

  selectedLanguage;

  ngOnInit(): void {
   this.selectedLanguage = this.languages.find(l => l.value === 'en'); 
  }

  updateLanguage($event: MatSelectChange): void {
    this.translateService.use($event.value.value);
  }

}
