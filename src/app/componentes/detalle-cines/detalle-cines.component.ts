import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cine } from '../../clases/cine';
import { emision } from '../../clases/emision';


@Component({
  selector: 'app-detalle-cines',
  templateUrl: './detalle-cines.component.html',
  styleUrls: ['./detalle-cines.component.css']
})
export class DetalleCinesComponent implements OnInit {
  @Input() cineElegido:cine;
  @Input() emisiones:emision[];
  @Output() cineEliminar:EventEmitter<any>=new EventEmitter<any>();
  cine:cine;
  constructor() { 
    
    
    
  }
  
  ngOnInit(): void {
    
    
  }
 
  eliminarCine(cine:cine){
    console.log("se lanzó" + cine.nombre);
    this.cineEliminar.emit(cine);
  }
}
