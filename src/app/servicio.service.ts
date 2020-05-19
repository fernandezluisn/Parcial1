import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { actor } from './clases/actor';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = "https://restcountries.eu/rest/v2/region/americas";
  listaA:string;
  listaP;
  constructor(private http:HttpClient) { 
        this.listaA="listaActores";
    
        this.obtenerPaises().subscribe(element=>{    
      
          this.listaP=element;
        }); 
   
}


  obtenerPaises(){   
    
    return this.http.get(this.url);
}


deshabilitar(pais){

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
}
