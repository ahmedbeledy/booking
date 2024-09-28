import { Component } from '@angular/core';
import { HomeLookupService } from '../../services/home-lookup.service';
import { IPlace } from '../../../../core';

@Component({
  selector: 'app-top-places',
  templateUrl: './top-places.component.html'
})
export class TopPlacesComponent {

  topPlaces!: IPlace[];

  constructor(private _HomeLookup: HomeLookupService){}

  ngOnInit(): void {
      this.getTopPlaces();
  }

  getTopPlaces(){
    this._HomeLookup.getTopPlaces().subscribe({
      next: (res)=>{
        this.topPlaces = res;
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
