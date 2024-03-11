import { Component } from '@angular/core'; 
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';
import { Place } from '../place';
@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrl: './nearby-places.component.css'
})
export class NearbyPlacesComponent {

  constructor(private router:Router){}
  places:Place[]=[];
  longitudeValid: boolean = true;  
  latitudeValid: boolean = true; 
  latitude!:number;
  longitude!:number;
  kilometer!:number;
  queryParams = {
    latitude: this.latitude,
    longitude: this.longitude,
    kilometer: this.kilometer
  };

  validateLatitude(val: number): boolean {
    this.latitudeValid = val >= -90 && val <= 90; // Geçerlilik durumunu kontrol edelim.
    return this.latitudeValid;
  }
  validateLongitude(val: number): boolean {
    this.longitudeValid = val >= -180 && val <= 180; // Geçerlilik durumunu kontrol edelim.
    return this.longitudeValid;
  }
  onSubmit():void{ 
    this.queryParams.kilometer=this.kilometer;
    this.queryParams.latitude=this.latitude;
    this.queryParams.longitude=this.longitude;
    
    this.router.navigate(['/marked-map'],{queryParams:this.queryParams});
    /*
    this.placeService.getNearbyPlacesList(this.latitude,this.longitude,this.kilometer).subscribe(data=>{
      this.places=data;
      console.log(this.places); // Sadece işlem tamamlandıktan sonra çalışacak
      // Diğer işlemler buraya taşınabilir
    });*/
  }
}
