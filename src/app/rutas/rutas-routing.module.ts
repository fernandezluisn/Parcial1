import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../componentes/home/home.component';
import { BusquedaComponent } from '../componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from '../componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../componentes/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from '../componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from '../componentes/actor-listado/actor-listado.component';
import { PaisesListadoComponent } from '../componentes/paises-listado/paises-listado.component';
import {SalaDeCineComponent} from '../componentes/sala-de-cine/sala-de-cine.component';
import {AltaCineComponent} from '../componentes/alta-cine/alta-cine.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"salaDeCine", component:SalaDeCineComponent},
  {path:"altaCine", component:AltaCineComponent},
  {path:"busqueda", component:BusquedaComponent},
  {path:"peliculas", children:[
    {path:"alta", component:PeliculaAltaComponent},
    {path:"listado", component:PeliculaListadoComponent}
  ]},
  {path:"actor", children:[
    {path:"alta", component:ActorAltaComponent},
    {path:"listado", component:ActorListadoComponent}
  ]},
  {path:"paises", children:[
    {path:"listado", component:PaisesListadoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
