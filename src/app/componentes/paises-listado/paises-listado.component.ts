import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  @Input() paisSeleccionado;
  hayPais:boolean;
  
  
  constructor() { 
    this.hayPais=true;
  }

  ngOnInit(): void {
  }

  tomarPaisParaDetalles(pais)
  {
    this.hayPais=false;
  this.paisSeleccionado=pais;   
  }
}
