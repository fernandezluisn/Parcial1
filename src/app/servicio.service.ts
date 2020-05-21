import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { actor } from './clases/actor';
import { pelicula } from './clases/pelicula';
import { cine } from './clases/cine';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = "https://restcountries.eu/rest/v2/region/americas";
  listaA:string;
  listaP;
  listaPeliculas;
  listaCines;

  constructor(private http:HttpClient) { 
        this.listaA="listaActores";
        this.listaPeliculas="listaPeliculas";
        this.listaCines="listaCines";
    
        this.obtenerPaises().subscribe(element=>{    
      
          this.listaP=element;
        }); 
   
}


  obtenerPaises(){   
    
    return this.http.get(this.url);
}


deshabilitar(pais){ 
  
  console.log(this.listaP.lenght);
  this.listaP.forEach(element=>{
    if(element.name==pais.name && element.capital==pais.capital)
    {
      let n=this.listaP.indexOf(element);
      this.listaP.splice(n,1);
    }
  });
}

/////////////////////////////////actores//////////////////////////////

traerActores():actor[]{
  let jugadoresV:actor[];
  jugadoresV=JSON.parse(localStorage.getItem(this.listaA)); 
  return jugadoresV;
}

checkListaA(jugadores:actor[], nombre:string, apellido:string):boolean{
  let respuesta=false;
  jugadores.forEach(element=>{
    if(nombre==element.nombre && apellido==element.apellido)
    {
      respuesta=true;        
    }
  });
  return respuesta;
}

registrarActor(actor1:actor):boolean{
    
  let jugadoresV:actor[]; 
  

  jugadoresV=JSON.parse(localStorage.getItem(this.listaA));
  
  if( (typeof jugadoresV !== 'undefined') &&  (jugadoresV!== null))
  {            
    if(this.checkListaA(jugadoresV, actor1.nombre, actor1.apellido)==false)
    {
      localStorage.removeItem(this.listaA);      
      jugadoresV.push(actor1);        
    }else{
      return false;
    }
    
  }else{
    jugadoresV=new Array();
    jugadoresV.push(actor1);      
  }
  
  localStorage.setItem(this.listaA, JSON.stringify(jugadoresV));
  return true;
}

//////////cines////////////////////
traerCines():cine[]{
  let jugadoresV:cine[];
  jugadoresV=JSON.parse(localStorage.getItem(this.listaCines)); 
  return jugadoresV;
}

checkListaCines(cines:cine[], nombre:string, pais:string):boolean{
  let respuesta=false;
  cines.forEach(element=>{
    if(nombre==element.nombre && pais==element.pais)
    {
      respuesta=true;        
    }
  });
  return respuesta;
}

registrarCine(cine1:cine):boolean{
    
  let cinesV:cine[]; 
  

  cinesV=JSON.parse(localStorage.getItem(this.listaCines));
  
  if( (typeof cinesV !== 'undefined') &&  (cinesV!== null))
  {            
    if(this.checkListaCines(cinesV, cine1.nombre, cine1.pais)==false)
    {
      localStorage.removeItem(this.listaCines);      
      cinesV.push(cine1);        
    }else{
      return false;
    }
    
  }else{
    cinesV=new Array();
    cinesV.push(cine1);      
  }
  
  localStorage.setItem(this.listaCines, JSON.stringify(cinesV));
  return true;
}

/////peliculas//////////////////

traerPeliculas():pelicula[]{
  let jugadoresV:pelicula[];
  jugadoresV=JSON.parse(localStorage.getItem(this.listaPeliculas)); 
  return jugadoresV;
}

checkListaPelis(peliculas:pelicula[], nombre:string, director:string):boolean{
  let respuesta=false;
  peliculas.forEach(element=>{
    if(nombre==element.nombre && director==element.director)
    {
      respuesta=true;        
    }
  });
  return respuesta;
}

registrarPelicula(pelicula1:pelicula):boolean{
    
  let peliculasV:pelicula[]; 
  

  peliculasV=JSON.parse(localStorage.getItem(this.listaPeliculas));
  
  if( (typeof peliculasV !== 'undefined') &&  (peliculasV!== null))
  {            
    if(this.checkListaPelis(peliculasV, pelicula1.nombre, pelicula1.director)==false)
    {
      localStorage.removeItem(this.listaPeliculas);      
      peliculasV.push(pelicula1);        
    }else{
      return false;
    }
    
  }else{
    peliculasV=new Array();
    peliculasV.push(pelicula1);      
  }
  
  localStorage.setItem(this.listaPeliculas, JSON.stringify(peliculasV));
  return true;
}

borrarPelicula(pelicula){
  
    let nuevaLista=this.traerPeliculas();
    console.log("lista "+nuevaLista.length);
    localStorage.removeItem(this.listaPeliculas);
    
    nuevaLista.forEach(element=>{
      if(element.nombre==pelicula.nombre && element.director==pelicula.director)
      {
        let n=nuevaLista.indexOf(element);
        nuevaLista.splice(n,1);
      }
    });
    
    
    localStorage.setItem(this.listaPeliculas, JSON.stringify(nuevaLista));

}
}
