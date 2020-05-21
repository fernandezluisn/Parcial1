import { Component, OnInit, Input } from '@angular/core';
import { cine } from '../../clases/cine';
import { emision } from 'src/app/clases/emision';

@Component({
  selector: 'app-detalle-cines',
  templateUrl: './detalle-cines.component.html',
  styleUrls: ['./detalle-cines.component.css']
})
export class DetalleCinesComponent implements OnInit {
  @Input() cineElegido:cine;
  @Input() emisiones:emision[];
  constructor() { 
    
    
  }
  
  ngOnInit(): void {
    
    console.log("emis"+ this.emisiones);
  }
 
}
