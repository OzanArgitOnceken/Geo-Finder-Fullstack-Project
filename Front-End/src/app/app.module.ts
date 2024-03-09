import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePlaceComponent } from './create-place/create-place.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    CreatePlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
