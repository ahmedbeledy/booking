import { Component, OnInit } from '@angular/core';
import { IPlace } from '../../../../core';
import { HomeLookupService } from '../../services/home-lookup.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html'
})
export class TrendingComponent implements OnInit {

  trendingPlaces!: IPlace[];

  constructor(private _HomeLookup: HomeLookupService){}

  ngOnInit(): void {
      this.getTrendingPlaces();
  }

  getTrendingPlaces(){
    this._HomeLookup.getTrendingPlaces().subscribe({
      next: (res)=>{
        this.trendingPlaces = res;
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
