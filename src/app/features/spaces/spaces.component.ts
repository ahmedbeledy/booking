import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MapComponent } from '../../shared/components/map/map.component';
import { SpacesService } from '../../shared/services/spaces/spaces.service';
import { IArea, IPlace } from '../../core';
import { LookupsService } from '../../shared/services/lookups/lookups.service';
import { IQueryParams } from './models/IQueryParams.model';

type IPlaceExtended = IPlace & { onMapHover: boolean };

@Component({
  selector: 'app-spaces',
  standalone: true,
  imports: [CommonModule, SharedModule, MapComponent],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss'
})
export class SpacesComponent implements OnInit {
  spaces!: IPlace[];
  displayedSpaces!: IPlaceExtended[];
  areas!: IArea[];
  queryParams: IQueryParams = {
    area: '',
    duration: '',
    guests: 0,
    bathrooms: 0,
    beds: 0
  };

  constructor(private _spacesService: SpacesService, private _lookups: LookupsService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.getAreas();
    this.getSpaces();
  }
  getAreas() {
    this._lookups.getAreas().subscribe({
      next: (res) => {
        this.areas = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getSpaces() {
    this._spacesService.getSpaces(this.queryParams).subscribe({
      next: (res) => {
        this.spaces = res;
        this.onFilter(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onSearch() {
    // this.getSpaces();
    this.onFilter(this.spaces);
  }

  onFilter(values: IPlace[]) {
    this.displayedSpaces = values.filter((value) => {
      // if(queryParams.area != "" && value.area !== queryParams.area) return false;
      if (this.queryParams.guests !== 0 && value.guests !== this.queryParams.guests) return false;
      if (this.queryParams.bathrooms !== 0 && value.bathrooms !== this.queryParams.bathrooms) return false;
      if (this.queryParams.beds !== 0 && value.beds !== this.queryParams.beds) return false;

      return true;
    }).map((value: IPlace) => {
      return { onMapHover: true, ...value };
    })
  }
}
