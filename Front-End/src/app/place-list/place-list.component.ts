import { Component, OnInit } from '@angular/core';
import { Place } from '../place';

/*
Decorator that marks a class as an Angular component and provides 
configuration metadata that determines how the component should be
processed, instantiated, and used at runtime.
*/
@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent implements OnInit{
  
  places:Place[]=[];
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
