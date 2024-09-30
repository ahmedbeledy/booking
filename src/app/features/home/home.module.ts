import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopPlacesComponent } from './components/top-places/top-places.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ServicesComponent } from './components/services/services.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceCardComponent } from './components/services/components/service-card/service-card.component';


const routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    NewsletterComponent,
    TopPlacesComponent,
    TrendingComponent,
    ServicesComponent,
    BannerComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
