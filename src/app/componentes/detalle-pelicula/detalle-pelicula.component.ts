import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pelicula } from '../../clases/pelicula';


@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() pelicula;
  @Output() borrarPeli: EventEmitter<any>=new EventEmitter<any> ();

  constructor() { }
  

  ngOnInit(): void {
  }

  borrar(pelicula:pelicula){
    this.borrarPeli.emit(pelicula);
    console.log("se lanzó "+pelicula.nombre);
  }
}
