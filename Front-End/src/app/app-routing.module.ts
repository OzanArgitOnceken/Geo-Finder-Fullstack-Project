import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';
import { PlacesMapComponent } from './places-map/places-map.component'; 
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';
import { MarkedMapComponent } from './marked-map/marked-map.component';

const routes: Routes = [
  {path: 'places',component: PlaceListComponent},
  {path:'create-place',component: CreatePlaceComponent},
  {path: '',redirectTo:'places',pathMatch:'full'},
  {path:'update-place/:id',component:UpdatePlaceComponent},
  {path:'places-map',component: PlacesMapComponent},
  {path:'nearby-places',component: NearbyPlacesComponent},
  {path:'marked-map',component: MarkedMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
