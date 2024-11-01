import { Component, Input } from '@angular/core';
import { IFacility } from '../../../core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  host: {
    '[id]': "id"
  }
})
export class PlaceCardComponent {
  assets: string[] = ["assets/img/rand1.png", "assets/img/rand2.png", "assets/img/rand3.png", "assets/img/rand4.png"];
  randImageIndex = Math.floor(Math.random() * this.assets.length);
  @Input() id = 0;
  @Input() orientation: "Vert" | "Horz" = "Vert";
  @Input() imageURL: string =   "https://lacasaresidence.com/api/img/1b8b1ea4-b7a1-43b1-ad77-962d4455a4be.jpeg" 

  @Input() routeTo!: string;
  @Input() name!: string;
  @Input() country!: string;
  @Input() review!: string;
  @Input() oldPrice!: number;
  @Input() latestPrice!: number;
  @Input() includeTaxes: boolean = true;
  @Input() facilities!: any;
  @Input() rooms!: number;
  @Input() beds!: number;
  @Input() bathrooms!: number;
  @Input() onMapHover: boolean = false;
}
