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
  nicolasFurtado:actor;
  claudioRissi:actor;
  martinaGuzman:actor;
  actorSeleccionado:boolean;
  actorS:actor;
  pais;

  constructor(private serv:ServicioService) {
    

    this.nicolasFurtado=new actor(1, "Nicolas", "Furtado", "masculino", "11-11-1991",  '../assets/nicolasF.jpg', "Uruguay");
    this.claudioRissi=new actor(2, "Claudio", "Rissi",  "masculino","11-11-1993",  '../assets/claudioR.jpg', "Argentina");
    this.martinaGuzman=new actor(3, "Martina", "Guzman",  "femenino","11-11-1995",  '../assets/martinaG.jpg', "Argentina");
    this.actores=new Array();
    this.actorSeleccionado=false;
    serv.registrarActor(this.claudioRissi);
    serv.registrarActor(this.martinaGuzman);
    serv.registrarActor(this.nicolasFurtado);

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
    this.pais=this.hallarPais(actor.pais);
    this.actorSeleccionadoT=actor;
  }
}
