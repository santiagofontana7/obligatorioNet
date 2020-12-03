import { Genero } from './genero';
import { Integrante } from './integrante';
import { ReseniaCancion } from './reseniaCancion';
import { Byte } from '@angular/compiler/src/util';

export interface Cancion {
  Id: number;
  Nombre: string;
  Genero: Genero;
  Duracion: number;
  Anio: number,
  Data: Byte[],
  Cantante: Integrante
  Resenias: ReseniaCancion[],
  PromedioResenias: number
}


