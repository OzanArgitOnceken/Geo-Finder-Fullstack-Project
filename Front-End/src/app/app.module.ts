import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { FormsModule } from '@angular/forms';
import { UpdatePlaceComponent } from './update-place/update-place.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { PlacesMapComponent } from './places-map/places-map.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    CreatePlaceComponent,
    UpdatePlaceComponent,
    PlacesMapComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
