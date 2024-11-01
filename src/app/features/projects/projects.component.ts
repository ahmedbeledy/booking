import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,MapComponent,ProjectCardComponent,SharedModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {



  // properties = [
  //   {
  //     title: "2 BR pool view coastal haven",
  //     location: "El Gouna, Red Sea",
  //     details: "2 Bedrooms • 3 Beds • 2 Bathrooms • 120 m2",
  //     amenities: "Hot water • Smart TV • 24/7 Support • Air Conditioning • Wi-Fi • Beach Access • Shared swimming pool",
  //     price: "$140"
  //   },
  //   // Add more properties as needed
  // ];
  
  // Mock project data
  projects: Project[] = [
    {
      name: 'Nasr City',
      description: '5-star hotel in the heart of El Nasr City, Cairo, where luxury meets convenience. Our goal is to provide an exceptional hospitality experience for visitors from Egypt and beyond, ensuring that every guest feels pampered and valued..',
      imageUrl: '/assets/img/build.jpg',
      latitude: 30.0444,
      longitude: 31.2357
    },
    {
      name: 'Sheraton',
      description: 'A cozy apartment near the Pyramids.',
      imageUrl: "/assets/img/soon.png",
      latitude: 29.9765,
      longitude: 31.1313
    }
  ];

  selectedProject: Project | null = null;

  // Function to select a project and center it on the map
  selectProject(project: Project) {
    this.selectedProject = project;
  }

}
