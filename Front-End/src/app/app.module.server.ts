import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    BrowserModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
