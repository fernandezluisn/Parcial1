import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RutasRoutingModule} from '../app/rutas/rutas-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import {ServicioService} from '../app/servicio.service';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent
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
