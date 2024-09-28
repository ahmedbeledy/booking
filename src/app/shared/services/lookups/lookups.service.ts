import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IArea, IFacility, IInvoice, ILanguage, IPaymentCards, IPlace, IService, ITime } from '../../../core/models/interfaces';
import { EndPoints } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private _HttpClient: HttpClient) { }

  getPaymentCard(): Observable<IPaymentCards[]> {
    return new BehaviorSubject<IPaymentCards[]>([
      {
        id: 1,
        name: 'American Express',
        imagePath: 'assets/img/paymentcardslogos/amex.png'
      },
      {
        id: 2,
        name: 'Visa',
        imagePath: 'assets/img/paymentcardslogos/visa.png'
      },
      {
        id: 3,
        name: 'Mastercard',
        imagePath: 'assets/img/paymentcardslogos/mastercard.png'
      },
      {
        id: 4,
        name: 'Maestro',
        imagePath: 'assets/img/paymentcardslogos/maestro.png'
      }
    ])
  }

  getInvoices(): Observable<IInvoice[]> {
    return new BehaviorSubject<IInvoice[]>([{
      name: 'Legal company name (please specify)',
      value: 'Default'
    }])
  }

  getAreas(): Observable<IArea[]> {
    return this._HttpClient.get<IArea[]>(EndPoints.getAllAreas);
  }

  getFacilities(): Observable<IFacility[]> {
    return new BehaviorSubject<IFacility[]>([
      { id: 1, name: 'Restaurant' },
      { id: 2, name: 'Room service' },
      { id: 3, name: 'Bar' },
      { id: 4, name: '24-hour front desk' },
      { id: 5, name: 'Sauna' },
      { id: 6, name: 'Fitness centre' },
      { id: 7, name: 'Garden' },
      { id: 8, name: 'Terrace' },
      { id: 9, name: 'Non-smoking rooms' },
      { id: 10, name: 'Airport shuttle' },
      { id: 11, name: 'Family rooms' },
      { id: 12, name: 'Spa and wellness centre' },
      { id: 13, name: 'Hot tub/Jacuzzi' },
      { id: 14, name: 'Free WiFi' },
      { id: 15, name: 'Air conditioning' },
      { id: 16, name: 'Water park' },
      { id: 17, name: 'Electric vehicle charging station' },
      { id: 18, name: 'Swimming pool' },
      { id: 19, name: 'Beach' }
    ])
  }

  getLanguages(): Observable<ILanguage[]> {
    return new BehaviorSubject<ILanguage[]>([
      { id: 1, name: 'Arabic'},
      { id: 2, name: 'English'},
      { id: 3, name: 'French'},
      { id: 4, name: 'German'},
      { id: 5, name: 'Spanish'},
    ])
  }

  getTimes(): Observable<ITime[]>{
    return new BehaviorSubject<ITime[]>([
      { id: 1, name: '00:00' },
      { id: 2, name: '01:00' },
      { id: 3, name: '02:00' },
      { id: 4, name: '03:00' },
      { id: 5, name: '04:00' },
      { id: 6, name: '05:00' },
      { id: 7, name: '06:00' },
      { id: 8, name: '07:00' },
      { id: 9, name: '08:00' },
      { id: 10, name: '09:00' },
      { id: 11, name: '10:00' },
      { id: 12, name: '11:00' },
      { id: 13, name: '12:00' },
      { id: 14, name: '13:00' },
      { id: 15, name: '14:00' },
      { id: 16, name: '15:00' },
      { id: 17, name: '16:00' },
      { id: 18, name: '17:00' },
      { id: 19, name: '18:00' },
      { id: 20, name: '19:00' },
      { id: 21, name: '20:00' },
      { id: 22, name: '21:00' },
      { id: 23, name: '22:00' },
      { id: 24, name: '23:00' },
    ])
  }
}
