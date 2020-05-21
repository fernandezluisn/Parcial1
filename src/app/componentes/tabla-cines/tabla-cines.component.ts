import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cine } from '../../clases/cine';


@Component({
  selector: 'app-tabla-cines',
  templateUrl: './tabla-cines.component.html',
  styleUrls: ['./tabla-cines.component.css']
})
export class TablaCinesComponent implements OnInit {

  @Input() listaCines: cine[];
  @Output() cineEmite:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }
  
  

  ngOnInit(): void {
  }

  mostrarDetalles(cine){
    this.cineEmite.emit(cine);
  }
}
