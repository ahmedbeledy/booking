import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: AdminpanelComponent },
  { path: 'register', loadComponent: () => import("./pages/register/register.component").then(m => m.RegisterComponent) },
  { path: 'sign-in', loadComponent: () => import("./pages/sign-in/sign-in.component").then(m => m.SignInComponent) },
  { path: 'add-property', loadChildren: () => import('./pages/add-property/add-property.module').then(m => m.AddPropertyModule) },
  { path: 'property', loadChildren: () => import('./pages/property/property.module').then(m => m.PropertyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
