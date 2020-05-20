import { Component, OnInit } from '@angular/core';
import { actor } from '../../clases/actor';
import { pelicula } from '../../clases/pelicula';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  hayPelicula:boolean;
  actores:actor[];
  peliculas;
  peliculaE:pelicula;
  
  constructor(private servicio:ServicioService) { 
    this.hayPelicula=false;
    this.peliculas=servicio.traerPeliculas();
  }

  ngOnInit(): void {
  }

  tomarPeliParaDetalle(pelicula:pelicula){
    this.peliculaE=pelicula;
    
    this.actores=pelicula.actores;
    this.hayPelicula=true;

  }

}
