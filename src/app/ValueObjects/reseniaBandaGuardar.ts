import {formatDate} from '@angular/common';

export class ReseniaBandaGuardar
{
        IdBanda: number;
        NombreBanda: string;
        IdUsuario: number;
        Puntuacion: number;
        Comentario: string;

        constructor(idBanda: number, nombreBanda: string, idUsuario: number, puntuacion: number, comentario: string)
        {
            this.IdBanda = idBanda;
            this.NombreBanda = nombreBanda;
            this.IdUsuario = idUsuario;
            this.Puntuacion = puntuacion;
            this.Comentario = comentario;
        }
}