import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, CardComponent, SharedModule],
  templateUrl: './aboutus.component.html'
})
export class AboutusComponent {

  // cards: any[] = [0,1,2];

  constructor(){}

  showControls(video: any){
    video.setAttribute("controls", "controls")
  }

}
