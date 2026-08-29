import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-empty-list',
  imports: [AvatarComponent],
  templateUrl: './empty-list.component.html'
})
export class EmptyListComponent {
  emptyListMessage = 'Ask wisely. I remember everything.'

}
