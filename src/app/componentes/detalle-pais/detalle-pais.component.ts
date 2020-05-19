import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() pais; 
  @Output() paisO:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }
  
  
  ngOnInit(): void {
  }

  eliminarPais(pais){
    this.paisO.emit(pais);
  }

}
