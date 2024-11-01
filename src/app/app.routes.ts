import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'aboutus', loadComponent: () => import('./features/aboutus/aboutus.component').then(m => m.AboutusComponent) },
  { path: 'contactus', loadComponent: () => import('./features/contactus/contactus.component').then(m => m.ContactusComponent) },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent) },
  { path: 'spaces', loadComponent: () => import('./features/spaces/spaces.component').then(m => m.SpacesComponent) },
  { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'partner', loadComponent: () => import('./features/partner/partner.component').then(m => m.PartnerComponent) },

  { path: 'space/:id', loadComponent: () => import('./features/space/space.component').then(m => m.SpaceComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
