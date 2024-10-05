import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminpanel-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './adminpanel-navbar.component.html',
  styleUrl: './adminpanel-navbar.component.scss'
})
export class AdminpanelNavbarComponent {
  @Input() module = "Group";
}
