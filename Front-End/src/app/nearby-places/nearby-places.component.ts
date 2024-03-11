import { Component } from '@angular/core';

@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrl: './nearby-places.component.css'
})
export class NearbyPlacesComponent {

  longitudeValid: boolean = true;  
  latitudeValid: boolean = true; 
  latitude!:number;
  longitude!:number;
  kilometer!:number;

  validateLatitude(val: number): boolean {
    this.latitudeValid = val >= -90 && val <= 90; // Geçerlilik durumunu kontrol edelim.
    return this.latitudeValid;
  }
  validateLongitude(val: number): boolean {
    this.longitudeValid = val >= -180 && val <= 180; // Geçerlilik durumunu kontrol edelim.
    return this.longitudeValid;
  }
  onSubmit():void{
    console.log("--------");
    console.log(this.kilometer);
    console.log(this.latitude);
    console.log(this.longitude);
  }
}
