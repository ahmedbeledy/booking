import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-module',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  controls: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  showControls(video: any){
    video.setAttribute("controls", "controls")
  }

}
