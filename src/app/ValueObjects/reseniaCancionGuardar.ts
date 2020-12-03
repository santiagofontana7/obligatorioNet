import {formatDate} from '@angular/common';

export class ReseniaCancionGuardar
{
        IdCancion: number;
        NombreCancion: string;
        IdUsuario: number;
        Puntuacion: number;
        Comentario: string;

        constructor(idCancion: number, nombreCancion: string, idUsuario: number, puntuacion: number, comentario: string)
        {
            this.IdCancion = idCancion;
            this.NombreCancion = nombreCancion;
            this.IdUsuario = idUsuario;
            this.Puntuacion = puntuacion;
            this.Comentario = comentario;
        }
}



