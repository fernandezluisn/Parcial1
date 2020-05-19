import { actor } from './actor';

export class pelicula{
    id: number;
    nombre: string;
    actores: actor[];
    director: string;
    fechaEstreno: Date;
    foto: string;
    pais:string;

    constructor(id: number, nom: string, fecha: Date, pais: string, dir: string){
        this.director=dir;
        this.fechaEstreno=fecha;        
        this.id=id;
        this.nombre=nom;
        this.pais=pais;
        
    }
}