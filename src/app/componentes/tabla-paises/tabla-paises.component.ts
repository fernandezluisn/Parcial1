import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../servicio.service';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises;
  constructor(private service:ServicioService) { 
    this.listaPaises=new Array();
    
    let p1: Pais[];
    p1=new Array();
    
    
    
    
  }

  ngOnInit(): void {
    this.service.obtenerPaises().subscribe(element=>{
      
      
      this.listaPaises=element;
    });    
  }

}
