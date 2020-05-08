import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pais} from '../app/clases/pais';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = "https://restcountries.eu/rest/v2/region/americas";

  constructor(private http:HttpClient) { }

  obtenerPaises(){
    
    
    return this.http.get(this.url);
}

}
