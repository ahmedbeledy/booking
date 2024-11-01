import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArea } from '../../../../core/models/interfaces';
import { HomeLookupService } from '../../services/home-lookup.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit{

  searchForm: FormGroup = this._FB.group({
    selectArea: [null],
    fromDate: [null],
    toDate: [null],
    numOfGuests: [null] 
  });

  areas: IArea[] = [];

  constructor(private _FB: FormBuilder, private _HomeLookup: HomeLookupService){}

  ngOnInit(): void {
      this.getLookups()
  }
  getLookups() {
    this.getAreas()
  }

  getAreas(){
    this._HomeLookup.getAreas().subscribe({
      next: (res) => {
        this.areas = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  search(){
    // console.log(this.searchForm.value);
  }
}
 

