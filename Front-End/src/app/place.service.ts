import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private baseURL="http://localhost:8070/api/v1/places";
  constructor(private httpClient:HttpClient) { }
  getPlacesList(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(`${this.baseURL}`);
  }
  
}
