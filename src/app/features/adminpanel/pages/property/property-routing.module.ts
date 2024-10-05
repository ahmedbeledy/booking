import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';

const routes: Routes = [
  {
    path: '', component: PropertyComponent, children: [
      { path: '', loadComponent: () => import("./pages/prop-home/prop-home.component").then(m => m.PropHomeComponent) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
