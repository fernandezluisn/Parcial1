import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { pelicula } from '../../clases/pelicula';
import { actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  @Input() peliSeleccionada: pelicula;
  
  
  director: string;
  nombre:string;
  fecha:string;
  actores: actor[];
  actoresPT:actor[];
  constructor(private servicio:ServicioService) { 
    this.actores=new Array();
    this.actoresPT=servicio.traerActores();
  }

  ngOnInit(): void {
  }

  subir(){
    if(this.nombre!="" && this.director!=null && this.fecha!=null && this.actores!=null)
    {
      let peliculas=this.servicio.traerPeliculas();
      
      if(peliculas!=null)
      {
        let peli1=new pelicula(peliculas.length+1, this.nombre, this.fecha, this.director, this.actores, "../assets/batman.jpg");
        let a=this.servicio.registrarPelicula(peli1);
        this.actores=null;
        if(a==false)
        alert("Esta pelicula ya se encuentra registrado")
      }else{
        let peli1=new pelicula(peliculas.length+1, this.nombre, this.fecha, this.director, this.actores, "../assets/batman.jpg");
        let a=this.servicio.registrarPelicula(peli1);
        this.actores=null;
        if(a==false)
        alert("Esta película ya se encuentra registrado")
      }
      
    }    
    else
    {
      alert("Debe llenar todos los datos.");
    }
  }


  tomarActorParaDetalles(actor){
    let a:boolean=false;
    if(this.actores!=null)
    {
      this.actores.forEach(element=>{
        if(element.nombre==actor.nombre && element.apellido==actor.apellido)
        a=true; 
      });
      if(a==false)
      this.actores.push(actor);
      else
      alert("este actor ya fue incluido.");
    }
    
  }
}
