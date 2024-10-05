import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';
import { HomeSummaryComponent } from './components/home-summary/home-summary.component';
import { AdminpanelNavbarComponent } from './components/adminpanel-navbar/adminpanel-navbar.component';

@NgModule({
  declarations: [
    AdminpanelComponent,
    HeaderComponent,
    TableComponent,
    TabsBarComponent,
    HomeSummaryComponent
  ],
  imports: [
    CommonModule,
    AdminpanelRoutingModule,
    AdminpanelNavbarComponent,
    SharedModule
  ]
})
export class AdminpanelModule { }
