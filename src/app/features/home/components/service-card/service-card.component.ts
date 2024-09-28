import { Component, Input } from '@angular/core';
import { TranslateControlService } from '../../../../shared/services/translateContol/translate-control.service';
enum DIR{
  rtl="left",
  ltr="right"
}

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() additionClassName!: string;
  @Input() title!: string;
  @Input() backgroundImageUrl!: string;
  @Input() routeTo!: string;
  dir: string = "right";

  constructor(private _TranslateControl: TranslateControlService){
    this.dir = DIR[this._TranslateControl.getDir()];
  }
}
