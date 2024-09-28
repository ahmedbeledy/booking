import { Component, OnInit } from '@angular/core';
import { IService } from '../../../../core/models/interfaces/IService.model';
import { HomeLookupService } from '../../services/home-lookup.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  services: IService[



  ] = [{
    id: 1,
    title: "Rewarding Your Loyalty, Every Step of the Way",
    img: "/assets/img/IMG_3207.jpeg",
    details: "Our exclusive loyalty program is designed to reward our valued guests with unparalleled benefits and privileges. Earn points with every stay and enjoy a range of perks, including room upgrades, late check-outs, and special discounts on dining and spa services. At Lacasa Residence, your loyalty is our greatest honor, and we strive to make every visit even more memorable.",

  }, {

    id: 2,
    title: "Crafting Memorable Experiences, Every Stay",
    img: "/assets/img/IMG_3218.jpeg",
    details: "Experience unparalleled hospitality with personalized service, world-class amenities, and elegant accommodations. We ensure a seamless and delightful stay for every guest.",


  }, {
    id: 3,
    title: "Your Journey, Our Priority",
    img: "/assets/img/IMG_3228.jpeg",
    details: "Explore Cairo effortlessly with our premium car rental service. Choose from a range of well-maintained vehicles, available 24/7 with competitive rates and exceptional customer service."
  }];

  constructor(private _HomeLookup: HomeLookupService) { }

  ngOnInit(): void {
    this.getService()
  }

  getService() {
    this._HomeLookup.getServices().subscribe({
      next: (res) => {
        this.services = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
