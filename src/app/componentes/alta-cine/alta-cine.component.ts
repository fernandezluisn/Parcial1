import { Component, OnInit, Input } from '@angular/core';
import { emision } from '../../clases/emision';
import { ServicioService } from '../../servicio.service';
import { pelicula } from '../../clases/pelicula';
import { cine } from '../../clases/cine';


@Component({
  selector: 'app-alta-cine',
  templateUrl: './alta-cine.component.html',
  styleUrls: ['./alta-cine.component.css']
})
export class AltaCineComponent implements OnInit {
  @Input() pelicula:pelicula;
  nombre:string;
  pais:string;
  emisiones:emision[];
  fecha:string;
  pelis:pelicula[];
  peliculas:pelicula[];
  hayPelis:boolean;
  

  constructor(private servicio:ServicioService) {  
    this.hayPelis=false;
    this.emisiones=new Array();
    this.nombre="";
  }

  ngOnInit(): void {
    this.pelis=this.servicio.traerPeliculas();
  }
  subir(){
    
    let cines=this.servicio.traerCines();
    if(this.nombre!="" && this.pais!=null && this.emisiones!=null)
    {     
      
      
        let cine1=new cine(cines.length+1, this.nombre, "../assets/batman.jpg", this.pais, this.emisiones );
        let a=this.servicio.registrarCine(cine1);        
        this.emisiones=null;    
        console.log("regi");   
        if(a==false)
        alert("Este cine ya se encuentra registrado");
      
    }    
    else
    {
      alert("Debe llenar todos los datos.");
    }

  }

  agregarPeli(peli:pelicula){
    if(this.fecha!=null)
    {
      let emi:emision=new emision(peli.nombre, this.fecha);
      this.emisiones.push(emi);
      this.hayPelis=true;
    }else
    alert("debe poner una fecha");
    
  }

}
