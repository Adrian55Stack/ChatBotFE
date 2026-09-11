import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FlagIconComponent } from "../flag-icon/flag-icon.component";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-language-selector',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, FlagIconComponent, TranslatePipe],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  private readonly languageService = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);

  languages: Language[];

  selectedLanguage: Language;

  ngOnInit(): void {
    this.languageService.getLanguages().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((langs) => {
      this.languages = langs;
      this.selectedLanguage = this.languages.find(l => l.value === 'en'); 
  });
  }

  updateLanguage($event: MatSelectChange): void {
    this.translateService.use($event.value.value);
  }

}
