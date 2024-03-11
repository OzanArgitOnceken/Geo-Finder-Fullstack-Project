import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';
import { Place } from '../place';

@Component({
  selector: 'app-marked-map',
  templateUrl: './marked-map.component.html',
  styleUrls: ['./marked-map.component.css']
})
export class MarkedMapComponent implements OnInit { 
  map!: google.maps.Map; // Define map property
  display: any;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  places: Place[] = [];
  longitude!: number;
  latitude!: number;
  kilometer!: number;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) { }

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.kilometer = params['kilometer'];
      this.longitude = params['longitude'];
      this.latitude = params['latitude'];
    });
  
    this.placeService.getNearbyPlacesList(this.latitude, this.longitude, this.kilometer).subscribe(data => {
      this.places = data;  
      this.places.forEach(place => {
        console.log("Place:", place); 
        this.addMarker(place);
      });
    });
  }
  addMarker(place: Place) {
    const { latitude, longitude } = place;
    const latLng = new google.maps.LatLng(latitude, longitude);
    this.markerPositions.push(latLng.toJSON());
}

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON();
  }
}
