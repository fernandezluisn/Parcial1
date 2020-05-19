import { Component, OnInit , Input } from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {actor} from '../../clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
 
  @Input() paisSeleccionado;
  hayPais:boolean;
  nombre:string;
  apellido:string;
  sexo:string;
  fecha:string;
  
  constructor(private servicio:ServicioService) {
    this.hayPais=true;
    this.nombre="";
    this.sexo="Mujer";
    this.fecha=null;
   }
  
  

  ngOnInit(): void {
  }

  tomarPaisParaDetalles(pais)
  {
    this.hayPais=false;
  this.paisSeleccionado=pais;   
  }

  
 
  subir(){
    if(this.hayPais==false && this.nombre!="" && this.apellido!=null && this.fecha!=null)
    {
      let actores=this.servicio.traerActores();
      if(actores!=null)
      {
        let actor1=new actor(actores.length+1, this.nombre, this.apellido, this.sexo, this.fecha, "../assets/batman.jpg", this.paisSeleccionado.name);
        let a=this.servicio.registrarActor(actor1);
        if(a==false)
        alert("Este actor ya se encuentra registrado")
      }else{
        let actor1=new actor(1, this.nombre, this.apellido, this.sexo, this.fecha, "../assets/batman.jpg", this.paisSeleccionado.name);
        let a=this.servicio.registrarActor(actor1);
        if(a==false)
        alert("Este actor ya se encuentra registrado")
      }
      
    }    
    else
    {
      alert("Debe llenar todos los datos.");
    }
  }
}
