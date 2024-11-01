import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() additionClassName!: string;
  @Input() title!: string;
  @Input() backgroundImageUrl!: string;
  @Input() routeTo!: string;

}
