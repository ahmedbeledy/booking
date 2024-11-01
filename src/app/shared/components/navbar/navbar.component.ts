import { Component, Input } from '@angular/core';
import { TranslateControlService } from '../../services/translateContol/translate-control.service';
// import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() dark: boolean = false;
  lang = this.translateControl.getLang();

  logoLight: string = "assets/img/Logo/Logo.png";
  logoColored: string = "assets/img/Logo/logo-colored.png";

  constructor(private translateControl: TranslateControlService) { }

  onLangChange() {
    this.translateControl.toggleLang();
    this.lang = this.translateControl.getLang();
  }

}
