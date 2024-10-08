import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';

const routes: Routes = [
  {
    path: '', component: PropertyComponent, children: [
      { path: '', loadComponent: () => import("./pages/prop-home/prop-home.component").then(m => m.PropHomeComponent) },
      { path: 'info', loadComponent: () => import("./pages/general-info/general-info.component").then(m => m.GeneralInfoComponent) },
      { path: 'amenities', loadComponent: () => import("./pages/room-amenities/room-amenities.component").then(m => m.RoomAmenitiesComponent) },
      { path: 'facilities', loadComponent: () => import("./pages/facilities/facilities.component").then(m => m.FacilitiesComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
