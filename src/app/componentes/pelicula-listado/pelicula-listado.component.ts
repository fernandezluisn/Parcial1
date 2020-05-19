import { Component, OnInit, Input } from '@angular/core';
import { pelicula } from '../../clases/pelicula';
import { ServicioService } from '../../servicio.service';
import { actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  
  @Input() peliSeleccionada: pelicula;
  
  pelis:pelicula[];
  hayPelicula:boolean;

  constructor(private servicio: ServicioService) {
    
    this.hayPelicula=false;

    
    this.pelis=servicio.traerPeliculas();
   }

  ngOnInit(): void {
  }

  

  tomarPeliParaDetalle(pelicula2){
    this.peliSeleccionada=pelicula2;
    this.hayPelicula=true;
    
  }

  tomarPeliParaBorrar(pelicula){
    this.servicio.borrarPelicula(pelicula);
    this.pelis.splice(pelicula);
  }

}
