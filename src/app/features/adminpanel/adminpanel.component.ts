import { Component } from '@angular/core';
import { ITabData } from './components/tabs-bar/models/ITabData.model';
import { Table } from './components/table/model/Table';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss'
})
export class AdminpanelComponent {

  openedTab: "op" | "pe" | "se" = "op";

  tabs: ITabData[] = [
    {type:"button", key: "op", title: "Operations", active: true},
    {type:"button", key: "pe", title: "Performance", active: false},
    {type:"button", key: "se", title: "Settings", active: false}
  ];

  tableCols: Table.IColumn[] = [
    {
      header: 'ID',
      property: 'id'
    },
    {
      header: 'Property',
      property: 'name'
    },
    {
      header: 'Arrivals in next 48 hours',
      property: 'arrivals'
    },
    {
      header: 'Departures in next 48 hours',
      property: 'departures'
    },
    {
      header: 'Guest messages',
      property: 'messages'
    }
  ]
  constructor(){}

  onTabClick($event: string) {
    this.openedTab = $event as "op" | "pe" | "se";
    }
}
