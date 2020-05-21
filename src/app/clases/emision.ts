import { pelicula } from './pelicula';

export class emision{
    
    fecha:string;
    peliculas: pelicula[];
    
   

    constructor(pelis:pelicula[], fecha:string){
        this.fecha=fecha;
        this.peliculas=pelis;
    }
}