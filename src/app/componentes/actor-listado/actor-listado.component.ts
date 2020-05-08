import { Component, OnInit } from '@angular/core';
import {actor} from '../../clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores:actor[];
  nicolasFurtado:actor;
  claudioRissi:actor;
  martinaGuzman:actor

  constructor() {
    this.nicolasFurtado=new actor(1, "Nicolas", "Furtado", "masculino", "11-11-1990",  '../assets/nicolasF.jpg', "Uruguay");
    this.claudioRissi=new actor(2, "Claudio", "Rissi",  "masculino","11-11-1993",  '../assets/claudioR.jpg', "Argentina");
    this.martinaGuzman=new actor(3, "Martina", "Guzman",  "femenino","11-11-1995",  '../assets/martinaG.jpg', "Argentina");
    this.actores=new Array();
    this.actores.push(this.nicolasFurtado, this.claudioRissi, this.martinaGuzman);
   }

  ngOnInit(): void {
  }

}
