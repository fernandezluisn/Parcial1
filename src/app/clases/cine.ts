import { emision } from './emision';

export class cine{
    id: number;
    nombre: string;
    peliculas:emision[];
    foto: string;
    pais:string;

    constructor(id: number, nom: string, foto: string, pais: string, emisiones:emision[]){
        
        this.foto=foto;
        this.id=id;
        this.nombre=nom;
        this.pais=pais;
        this.peliculas=emisiones;
        
    }
}