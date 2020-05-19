import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RutasRoutingModule} from '../app/rutas/rutas-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import {ServicioService} from '../app/servicio.service';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import {FormsModule} from '@angular/forms';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,    
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    PaisesListadoComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    DetalleActorComponent
    
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    RouterModule, 
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
