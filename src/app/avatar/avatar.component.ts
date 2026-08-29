import { Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {
  size = input.required<number>();
  altText = 'seshat';
}
