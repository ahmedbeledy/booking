import { Component, Input } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html'
})
export class MapComponent {
  @Input() markers!: any[]

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };

  onMarkerMouseOut(event: any) {
    console.log(event);
  }
  onMarkerHover(event: any) {
    console.log(event);
  }
}
