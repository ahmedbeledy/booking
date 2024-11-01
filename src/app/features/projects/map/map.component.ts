import { Component, Input, OnChanges } from '@angular/core';
import { Project } from '../projects.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges {
  @Input() projects: Project[] = [];
  @Input() selectedProject: Project | null = null;

  // Default location and zoom (Cairo center)
  center: google.maps.LatLngLiteral = { lat: 30.0444, lng: 31.2357 };
  zoom = 8;

  mapOptions: google.maps.MapOptions = {
    scrollwheel: true
  };

  ngOnChanges() {
    if (this.selectedProject) {
      this.center = {
        lat: this.selectedProject.latitude,
        lng: this.selectedProject.longitude
      };
      this.zoom = 12;
    }
  }
}