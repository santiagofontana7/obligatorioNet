import { Usuario } from './usuario';

export interface ReseniaCancion{
    Id: number,
    Puntuacion: number,
    Comentario: string,
    Fecha: Date,
    Usuario: Usuario
}