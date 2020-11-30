import { Usuario } from './usuario';

export interface ReseniaBanda{
    Id: number,
    Puntuacion: number,
    Comentario: string,
    Fecha: Date,
    Usuario: Usuario
}