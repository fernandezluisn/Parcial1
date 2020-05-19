import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { pelicula } from '../../clases/pelicula';
import { actor } from '../../clases/actor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pornoParaPrincipiantes: pelicula;
  laNoviaDelDesierto: pelicula;
  carancho: pelicula;

  constructor(private servicio:ServicioService) { 
    let nicoF=this.hallarActor("Nicolas", "Furtado");
    let act1=new Array();
    act1.push(nicoF);
    this.pornoParaPrincipiantes=new pelicula(1, "Porno para principiantes", "11-11-2018", "Argentina", "Carlos Ameglio", act1, '../assets/porno.jpg');
    

    let claudioR=this.hallarActor("Claudio", "Rissi");
    let act2=new Array();
    act2.push(claudioR);
    this.laNoviaDelDesierto=new pelicula(2, "La novia del desierto.", "30-11-2017", "Argentina", "Valeria Pivato", act2, '../assets/novia.jpg');
    

    let martinaG=this.hallarActor("Martina", "Guzman");
    let act3=new Array();
    act3.push(martinaG);
    this.carancho=new pelicula(3, "Carancho.", "6-5-2010", "Argentina", "Pablo Trapero", act3, '../assets/carancho.jpg');
    servicio.registrarPelicula(this.carancho);
    servicio.registrarPelicula(this.laNoviaDelDesierto);
    servicio.registrarPelicula(this.pornoParaPrincipiantes);

  }

  ngOnInit(): void {
  }

  hallarActor(nombre:string, apellido:string): actor{
    let actores=this.servicio.traerActores();
    
    let pais;
    actores.forEach(element => {
      
      if (nombre==element.nombre && apellido==element.apellido){
        pais=element;
        
      }
    });

    
    return pais;
  }

}
