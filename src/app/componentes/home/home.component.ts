import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { pelicula } from '../../clases/pelicula';
import { actor } from '../../clases/actor';
import { cine } from '../../clases/cine';
import { emision } from '../../clases/emision';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nicolasFurtado:actor;
  claudioRissi:actor;
  martinaGuzman:actor;
  pornoParaPrincipiantes: pelicula;
  laNoviaDelDesierto: pelicula;
  carancho: pelicula;
  abasto:cine;
  avellaneda:cine;
  auchan:cine;
  barracas:cine;
  splendid:cine;


  constructor(private servicio:ServicioService) { 


    let nicoF=this.hallarActor("Nicolas", "Furtado");
    let act1=new Array();
    act1.push(nicoF);
    this.pornoParaPrincipiantes=new pelicula(1, "Porno para principiantes", "11-11-2018",  "Carlos Ameglio", act1, '../assets/porno.jpg');
    

    let claudioR=this.hallarActor("Claudio", "Rissi");
    let act2=new Array();
    act2.push(claudioR);
    this.laNoviaDelDesierto=new pelicula(2, "La novia del desierto.", "30-11-2017",  "Valeria Pivato", act2, '../assets/novia.jpg');
    

    let martinaG=this.hallarActor("Martina", "Guzman");
    let act3=new Array();
    act3.push(martinaG);
    this.carancho=new pelicula(3, "Carancho.", "6-5-2010",  "Pablo Trapero", act3, '../assets/carancho.jpg');
    servicio.registrarPelicula(this.carancho);
    servicio.registrarPelicula(this.laNoviaDelDesierto);
    servicio.registrarPelicula(this.pornoParaPrincipiantes);


    this.nicolasFurtado=new actor(1, "Nicolas", "Furtado", "masculino", "11-11-1991",  '../assets/nicolasF.jpg', "Uruguay");
    this.claudioRissi=new actor(2, "Claudio", "Rissi",  "masculino","11-11-1993",  '../assets/claudioR.jpg', "Argentina");
    this.martinaGuzman=new actor(3, "Martina", "Guzman",  "femenino","11-11-1995",  '../assets/martinaG.jpg', "Argentina");
    
    
    servicio.registrarActor(this.claudioRissi);
    servicio.registrarActor(this.martinaGuzman);
    servicio.registrarActor(this.nicolasFurtado);

    let peliculas:pelicula[]=new Array;
    peliculas.push(this.carancho);
    peliculas.push(this.carancho);
    peliculas.push(this.pornoParaPrincipiantes);

    let peliculas1:pelicula[]=new Array;
    peliculas1.push(this.laNoviaDelDesierto);

    let emisiones:emision[]=new Array();
    let emisiones1:emision[]=new Array();
    let emision1=new emision("Carancho", "2020-06-08");
    let emision2=new emision("Porno para principiantes", "2020-06-09");
    let emision3=new emision("Porno para principiantes", "2020-06-18");
    let emision4=new emision("La novia del desierto.", "2020-06-28");
    emisiones.push(emision1);
    emisiones.push(emision3);
    emisiones1.push(emision2);
    emisiones1.push(emision4);

    this.avellaneda=new cine(1, "Alto Avellaneda", '../assets/nicolasF.jpg', "Argentina", emisiones1);
    this.auchan=new cine(2, "Auchan", '../assets/nicolasF.jpg', "Argentina", emisiones);
    this.splendid=new cine(3, "Splendid", '../assets/nicolasF.jpg', "Brazil", emisiones1);
    this.barracas=new cine(4, "Barracas", '../assets/nicolasF.jpg', "Argentina", emisiones);
    this.abasto=new cine(5, "Abasto", '../assets/nicolasF.jpg', "Argentina", emisiones1);
    servicio.registrarCine(this.avellaneda);
    servicio.registrarCine(this.auchan);
    servicio.registrarCine(this.barracas);
    servicio.registrarCine(this.splendid);
    servicio.registrarCine(this.abasto);
    
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
