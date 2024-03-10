import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({ 
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class PlacesMapModule {}



@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.css'],
  template:`<mat-form-field appearance="outline">
    <input #inputField matInput [placeholder]="placeholder"/>
  </mat-form-field>`,
})
export class PlacesMapComponent implements OnInit{ 
  
  
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }
  display : any;  
  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
 

}
