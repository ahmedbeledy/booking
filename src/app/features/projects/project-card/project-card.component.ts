import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() selectProject = new EventEmitter<Project>();

  onSelect() {
    this.selectProject.emit(this.project);
  }
}
