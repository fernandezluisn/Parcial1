export class actor{
    id: number;
    nombre: string;
    apellido: string;
    sexo: string;
    fechaNac: string;
    foto: string;
    pais:string;

    constructor(id: number, nom: string, ape:string, sex:string, fecha: string, foto: string, pais: string){
        this.apellido=ape;
        this.fechaNac=fecha;
        this.foto=foto;
        this.id=id;
        this.nombre=nom;
        this.pais=pais;
        this.sexo=sex;
    }
}