import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPropertyRoutingModule } from './add-property-routing.module';
import { AddPropertyComponent } from './add-property.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    AddPropertyComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    AddPropertyRoutingModule,
    SharedModule
  ]
})
export class AddPropertyModule { }
