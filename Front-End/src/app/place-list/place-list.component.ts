import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';

/*
Decorator that marks a class as an Angular component and provides 
configuration metadata that determines how the component should be
processed, instantiated, and used at runtime.
*/
@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit{
  
  places:Place[]=[];
  //bunu aşağıdaki constructor gibi kullanamamamın sebebi Angular,
  //constructor parametrelerini enjekte ederken TypeScript'in tip 
  //güvenliği özelliklerini kullanır. Router ve NavController gibi parametreler, 
  //Angular tarafından sağlanan servislerdir ve bu nedenle Angular,
  //bunları constructor parametreleri olarak algılayabilir ve uygun enjeksiyonları gerçekleştirebilir.
 
  constructor(private placeService:PlaceService,private router:Router){}
  ngOnInit(): void {
    this.getPlaces();
  }
  private getPlaces(){
    this.placeService.getPlacesList().subscribe(data=>{
      this.places=data;
    });
  }
  updatePlace(id:number){
    this.router.navigate(['update-place',id]);
  }
}
