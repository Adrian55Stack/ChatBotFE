import { Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  size = input.required<number>();
  altText = 'seshat';

  showMessage1(){
    console.log(1);
  }
  showMessage2(){
    console.log(1);
  }
  showMessage3(){
    console.log(1);
  }
}
