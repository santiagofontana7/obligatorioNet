import { Genero } from './genero';
import { Integrante } from './integrante';
import { ReseniaBanda } from './reseniaBanda';

export interface Banda {
    Id: number;
    Nombre: string;
    Genero: Genero;
    AnioCreacion: number,
    AnioSeparacion: number
    Resenias: ReseniaBanda[],
    Integrantes: Integrante[]
  }