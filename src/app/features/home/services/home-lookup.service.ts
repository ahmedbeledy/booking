// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IService } from '../../../core/models/interfaces/IService.model';
import { IArea, IPlace } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class HomeLookupService {

  constructor() { }

  getServices(): Observable<IService[]> {
    return new BehaviorSubject<IService[]>([
      {
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
      }
    ])
  }

  getTrendingPlaces(): Observable<IPlace[]> {
    return new BehaviorSubject<IPlace[]>([
      {
        id: 0,
        name: 'The Pyramids of Giza',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/1.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 0,
        name: 'Lorem Ipsum Sit',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/2.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 0,
        name: 'Lorem Ipsum Sit',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/3.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 0,
        name: 'Lorem Ipsum Sit',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/4.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      }
    ])
  }

  getTopPlaces(): Observable<IPlace[]> {
    return new BehaviorSubject<IPlace[]>([
      {
        id: 0,
        name: 'Deserts',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/rand4.png'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 1,
        name: 'Museums',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/rand1.png'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 2,
        name: 'Islamic places',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/2.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      },
      {
        id: 3,
        name: 'Antique stores',
        country: 'Egypt',
        review: '4.8 (2.4K Reviews)',
        oldPrice: 1800,
        price: 3000,
        includeTaxes: true,
        imageURL: ['/assets/img/4.jpg'],
        facilities: [],
        rooms: 0,
        beds: 0,
        bathrooms: 0,
        description: '',
        propertyID: 0,
        unitTypeID: 0,
        floorNumber: [],
        count: 0,
        guests: 0,
        status: '',
        amenities: undefined
      }
    ])
  }

  getAreas(): Observable<IArea[]> {
    return new Subject<IArea[]>();
  }

}
