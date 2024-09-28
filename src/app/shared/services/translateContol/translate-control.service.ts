import { Injectable } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { LangDir, Languages } from '../../../core';


@Injectable({
  providedIn: 'root'
})
export class TranslateControlService {

  language: Languages = "en";

  constructor(private translateService: TranslateService) { }

  setDefaultLang(lang: Languages){
    localStorage.setItem('lang', lang)
    this.translateService.setDefaultLang(lang)
    this.translateService.use(lang)
  }

  toggleLang() {
    let currentLang = this.lang;
    let lang = currentLang == 'ar' ? 'en' : 'ar'
    this.translateService.use(lang)
    localStorage.setItem('lang', lang)
  }

  getLang(){
    return this.lang;
  }

  onLangChange(){
    return this.translateService.onLangChange;
  }

  getDir(lang?: Languages){
    return LangDir[lang || this.getLang()];
  }

  get lang(): Languages {
    return (localStorage.getItem('lang') || this.language) as Languages
  }
}
