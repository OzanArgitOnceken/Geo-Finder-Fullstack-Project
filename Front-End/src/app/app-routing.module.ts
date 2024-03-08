import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';

const routes: Routes = [
  {path: 'places',component: PlaceListComponent},
  {path: '',redirectTo:'places',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
