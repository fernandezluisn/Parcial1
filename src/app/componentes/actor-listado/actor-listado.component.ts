import { Component, OnInit, Input } from '@angular/core';
import {actor} from '../../clases/actor';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  @Input() actorSeleccionadoT;
  actores:actor[];
  
  actorSeleccionado:boolean;
  actorS:actor;
  paisS;

  constructor(private serv:ServicioService) {   

    
    this.actorSeleccionado=false;
    this.actores=serv.traerActores();
    
   }

  ngOnInit(): void {
  }

  hallarPais(nombre:string){
    let paises=this.serv.listaP;
    
    let pais;
    paises.forEach(element => {
      
      if (nombre==element.name){
        pais=element;
        
      }
    });
    return pais;
  }

  tomarActorParaDetalles(actor){
    this.actorSeleccionado=true;
    this.paisS=this.hallarPais(actor.pais);
    this.actorSeleccionadoT=actor;
  }
}
