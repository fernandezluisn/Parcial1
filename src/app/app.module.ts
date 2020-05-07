import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RutasRoutingModule} from '../app/rutas/rutas-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
