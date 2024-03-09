import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css'] 
})
export class CreatePlaceComponent implements OnInit {
  place: Place = new Place();
  longitudeValid: boolean = true; // Değer geçerliliğini takip eden bir değişken ekleyelim.
  latitudeValid: boolean = true; // Latitude için geçerlilik kontrolü

  constructor(private placeService: PlaceService, private router: Router) {}

  savePlace() { 
    this.placeService.createPlace(this.place).subscribe(
      data => {
        console.log(data); 
        this.goToPlaceList();
      },
      error => console.log(error)
    );
  }

  goToPlaceList() {
    this.router.navigate(['/places']);
  }

  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.longitudeValid && this.latitudeValid) { // Eğer bozuk bir giriş yoksa, yer oluşturmayı devam ettirelim.
      console.log(this.place);
      this.savePlace();
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
