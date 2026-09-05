import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-empty-list',
  imports: [AvatarComponent, TranslatePipe],
  templateUrl: './empty-list.component.html',
})
export class EmptyListComponent {}
