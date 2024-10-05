import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

const routes: Routes = [
  { path: '', component: AddPropertyComponent, children: [
    {path: '', component: CategoryCardComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPropertyRoutingModule { }
