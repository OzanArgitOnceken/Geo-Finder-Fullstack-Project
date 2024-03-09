 
import { Component, OnInit } from '@angular/core'; 
import { PlaceService } from '../place.service';
import { error } from 'console';
import { Router } from '@angular/router';

import { Place } from '../place';
@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  place: Place = new Place();
  constructor(private placeService:PlaceService,private router:Router){}
  savePlace(){ 
    this.placeService.createPlace(this.place).subscribe(data=>{
        console.log(data); 
        this.goToPlaceList();
      },
      error=>console.log(error)
    );
  }
  goToPlaceList(){
    this.router.navigate(['/places']);
  }
  onSubmit(): void {
    console.log(this.place);
    this.savePlace();
  }
}
