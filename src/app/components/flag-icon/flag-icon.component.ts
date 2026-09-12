import { Component, input } from '@angular/core';

@Component({
  selector: 'app-flag-icon',
  imports: [],
  templateUrl: './flag-icon.component.html'
})
export class FlagIconComponent {
  src = input.required<string>();
  alt = input.required<string>();

  width=30;
  height=20;
}
