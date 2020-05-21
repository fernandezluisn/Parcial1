import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { cine } from '../../clases/cine';
import { emision } from '../../clases/emision';

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
}
