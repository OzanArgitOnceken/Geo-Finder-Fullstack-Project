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
  getNearbyPlacesList(latitude: number, longitude: number, distance: number): Observable<Place[]> {
    const url = `${this.baseURL}/nearby?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
    return this.httpClient.get<Place[]>(url);
  }
  createPlace(place:Place):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,place);
  }
  getPlaceById(id:number):Observable<Place>{
    return this.httpClient.get<Place>(`${this.baseURL}/${id}`);
  }
  updatePlace(id:number,place:Place):Observable<Object>{ 
    return this.httpClient.put(`${this.baseURL}/${id}`,place); 
  }
  deletePlace(id:number){ 
    return this.httpClient.delete(`${this.baseURL}/${id}`); 
  }
}
