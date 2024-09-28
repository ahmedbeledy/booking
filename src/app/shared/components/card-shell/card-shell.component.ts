import { Component } from '@angular/core';
import { SharedModule } from "../../shared.module";

@Component({
  selector: 'app-card-shell',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './card-shell.component.html',
  styleUrl: './card-shell.component.scss'
})
export class CardShellComponent {

}
