import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {pelicula} from '../../clases/pelicula';



@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listaPeliculas: pelicula[];
  @Output() peli:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }
  
 
  ngOnInit(): void {
  }

  mostrarDetalles(pelicula:pelicula){
    this.peli.emit(pelicula);
   
  }

}
