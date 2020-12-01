import { Genero } from './genero';
import { Integrante } from './integrante';
import { ReseniaBanda } from './reseniaBanda';
import { Byte } from '@angular/compiler/src/util';

export interface Cancion {
    Id: number;
    Nombre: string;
    Genero: Genero;
    Duracion: number;
    Anio: number,
    Data: Byte[],
    Integrantes: Integrante[]
  }


