import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ServicioService} from '../../servicio.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  listaPaises;
  constructor(private service:ServicioService) { 
    this.listaPaises=new Array(); 
    
  }

  ngOnInit(): void {
       
      
      this.listaPaises=this.service.listaP;
    
      
  }

  mostrarDetalles(pais)
  {
    
    this.paisSeleccionado.emit(pais);
  }

}
