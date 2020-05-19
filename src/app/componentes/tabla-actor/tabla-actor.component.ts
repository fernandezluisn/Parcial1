import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { actor } from '../../clases/actor';


@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Input() actoresT:actor[];
  @Output() actorSeleccionado:EventEmitter<any>= new EventEmitter<any>();
  constructor() { 
    
    
  }

  ngOnInit(): void {
  }

  mostrarDetalles(actor:actor){
    this.actorSeleccionado.emit(actor);
  }
}
