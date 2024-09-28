import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() img!: string;
  @Input() header!: string;
  @Input() paragraph!: string;

  imgDummy: string = "assets/img/earth.svg";
}
