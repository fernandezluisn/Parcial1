import { actor } from './actor';

export class pelicula{
    id: number;
    nombre: string;
    actores: actor[];
    director: string;
    fechaEstreno: string;
    foto: string;
   

    constructor(id: number, nom: string, fecha: string,  dir: string, actores:actor[], foto:string){
        this.director=dir;
        this.fechaEstreno=fecha;        
        this.id=id;
        this.nombre=nom;
        
        this.actores=actores;
        this.foto=foto;
    }
}