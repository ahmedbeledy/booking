import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { TranslateControlService } from './shared/services/translateContol/translate-control.service';
import { TranslateModule, TranslationChangeEvent } from '@ngx-translate/core';
import { Direction } from '@angular/cdk/bidi';
import { Languages } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SharedModule, HomeModule]
})
export class AppComponent {
  title = 'LaCasa-Residence';
  lang: Languages = 'en';
  dir: Direction = 'ltr';

  constructor(private translateControl:TranslateControlService){}

  ngOnInit(): void {
    let userPreChoice = this.translateControl.getLang();
    this.dir = this.translateControl.getDir();
    this.translateControl.setDefaultLang(userPreChoice);
    this.translateControl.onLangChange().subscribe((event: TranslationChangeEvent) => {
      this.dir = this.translateControl.getDir(event.lang as Languages);
    })
  }
}
