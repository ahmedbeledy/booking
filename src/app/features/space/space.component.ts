import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { _INullable, IPlace } from '../../core';
import { MapComponent } from '../../shared/components/map/map.component';
import { ActivatedRoute } from '@angular/router';
import { SpacesService } from '../../shared/services/spaces/spaces.service';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [SharedModule, MapComponent],
  templateUrl: './space.component.html',
  styleUrl: './space.component.scss'
})
export class SpaceComponent implements OnInit {

  id!: number;
  space!: IPlace;
  isLoading: boolean = true;

  constructor(private _ActivatedRoute: ActivatedRoute, private _SpacesService: SpacesService) {
    this.id = this._ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getSpace();
  }

  getSpace() {
    this._SpacesService.getSpaceById(this.id).subscribe({
      next: (res) => {
        this.space = res;
      },
      error: (err) => {
        console.log(err)
      }, complete: () => {
        this.isLoading = false
      }
    })
  }


}
