import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RutasRoutingModule} from '../app/rutas/rutas-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import {ServicioService} from '../app/servicio.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    RouterModule
  ],
  exports:[RouterModule],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
