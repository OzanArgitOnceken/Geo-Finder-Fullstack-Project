import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css'] // styleUrls kullanın, styleUrl değil
})
export class CreatePlaceComponent implements OnInit {
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
  ngOnInit(): void {
    console.log('Component initialized.');
  }
  
  onSubmit(): void {
    console.log(this.place);
  }
}
