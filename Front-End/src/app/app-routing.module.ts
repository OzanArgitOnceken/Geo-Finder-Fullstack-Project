import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { CreatePlaceComponent } from './create-place/create-place.component';

const routes: Routes = [
  {path: 'places',component: PlaceListComponent},
  {path:'create-place',component: CreatePlaceComponent},
  {path: '',redirectTo:'places',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
