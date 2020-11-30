import { Byte } from '@angular/compiler/src/util';

export interface Integrante {
    Id: number,
    Nombre: string,
    Apellido: string,
    FechaNacimiento: Date,
    Foto: Byte[]
}