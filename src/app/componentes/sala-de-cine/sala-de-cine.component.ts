import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { cine } from '../../clases/cine';
import { emision } from '../../clases/emision';
import { element } from 'protractor';

@Component({
  selector: 'app-sala-de-cine',
  templateUrl: './sala-de-cine.component.html',
  styleUrls: ['./sala-de-cine.component.css']
})
export class SalaDeCineComponent implements OnInit {

  listaDeCines;
  @Input() cine:cine;
  cineE:emision[];
  hayCine:boolean;
  busquedaN:string;
  busquedaP:string;

  constructor(private servicio:ServicioService) { 
    this.listaDeCines=this.servicio.traerCines();
    this.hayCine=false;
  }

  ngOnInit(): void {
    
  }

  agarraCine(cine:cine){
    this.cine=cine;
    this.cineE=cine.peliculas;
    
      cine.peliculas.forEach(element=>{
        console.log(element.nombre);
    });
    this.hayCine=true;
  }

  eliminar(cine:cine){
    console.log(cine.nombre);
    this.servicio.borrarCine(cine);
    this.listaDeCines=this.servicio.traerCines();
  }

  desfiltrar(){
    this.listaDeCines=this.servicio.traerCines();
  }
  filtrar(){
    let listadoFiltrado:cine[]=new Array();
    
      listadoFiltrado=this.listaDeCines.filter(element=>{
        if(element.nombre==this.busquedaN || element.pais==this.busquedaP)
        {
          listadoFiltrado.push(element);
          console.log(element);
        }
        this.listaDeCines=listadoFiltrado;
    });
    
  }
}
