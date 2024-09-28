import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints, IPlace } from '../../../core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IQueryParams } from '../../../features/spaces/models/IQueryParams.model';


@Injectable({
  providedIn: 'root'
})
export class SpacesService {

  constructor(private _HttpClient: HttpClient) { }

  getSpaces(queryParams: IQueryParams): Observable<IPlace[]> {
    return this._HttpClient.get<IPlace[]>(EndPoints.getAllUnits);
  }
  getSpaceById(id: number | string): Observable<IPlace>{
    return this._HttpClient.get<IPlace[]>(`${EndPoints.getUnitById}/${id}`).pipe(map((value)=>value[0]));
  }
}
