import { Genero } from './genero';
import { Cancion } from './cancion';
import { Banda } from './banda';


export interface Album {
    Id: number;
    Nombre: string;
    Genero: Genero;
    AnioCreacion: number,
    Banda: Banda,
    Canciones: Cancion[]
}

