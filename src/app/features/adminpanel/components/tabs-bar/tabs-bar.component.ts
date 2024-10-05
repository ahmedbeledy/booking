import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITabData } from './models/ITabData.model';


@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss']
})
export class TabsBarComponent {
  @Input() data!: ITabData[];
  @Output() tabClicked = new EventEmitter<ITabData['key']>()

  constructor(){}

  onClick(tab: ITabData){
    this.data.map((value)=>{
      if(value.key == tab.key && value.type == 'button') value.active = true;
      else if(value.key != tab.key && value.type == 'button') value.active = false;
    });
    this.tabClicked.emit(tab['key']);
    if(tab.type == 'button' && tab.onClick) tab.onClick(tab.key);
  }

 
}
