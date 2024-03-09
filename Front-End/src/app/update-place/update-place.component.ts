 
import { Component, OnInit } from '@angular/core'; 
import { PlaceService } from '../place.service';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

import { Place } from '../place';
@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit{
  longitudeValid: boolean = true;  
  latitudeValid: boolean = true; 
  id!:number;
  place: Place = new Place();
  constructor(private placeService:PlaceService,private router:Router,private route: ActivatedRoute,){}
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.placeService.getPlaceById(this.id).subscribe(data=>{
      this.place=data;
    },error=>console.log(error)
    );
    console.log('Component initialized.'); 
  } 
  validateLongitude(val: number): boolean {
    this.longitudeValid = val >= -180 && val <= 180; // Geçerlilik durumunu kontrol edelim.
    return this.longitudeValid;
  }

  validateLatitude(val: number): boolean {
    this.latitudeValid = val >= -90 && val <= 90; // Geçerlilik durumunu kontrol edelim.
    return this.latitudeValid;
  }
  goToPlaceList(){
    this.router.navigate(['/places']);
  }
  onSubmit(): void {    
  if (this.longitudeValid && this.latitudeValid) {  
      this.placeService.updatePlace(this.id,this.place).subscribe(data=>{ 
      this.goToPlaceList();
    },error=>console.log(error));
    } else {
      if (!this.longitudeValid) {
        console.log('Longitude is invalid. Please enter a valid longitude between -180 and 180.');
      }
      if (!this.latitudeValid) {
        console.log('Latitude is invalid. Please enter a valid latitude between -90 and 90.');
      }
    }
  }
}
