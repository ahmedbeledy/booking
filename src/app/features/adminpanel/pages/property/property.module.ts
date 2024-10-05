import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PropHeaderComponent } from './components/prop-header/prop-header.component';
import { AdminpanelNavbarComponent } from '../../components/adminpanel-navbar/adminpanel-navbar.component';


@NgModule({
  declarations: [
    PropertyComponent,
    PropHeaderComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    AdminpanelNavbarComponent,
    SharedModule
  ]
})
export class PropertyModule { }
